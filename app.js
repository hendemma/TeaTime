const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mysql = require("mysql");
const zmq = require('zeromq');

const con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "root",
    database: "Messages"
})

async function receiveEntry() {
    const sock = new zmq.Reply();
    await sock.bind('tcp://*:5556');
    for await (const [msg] of sock) {
        await sock.send("Entry received");
        console.log(JSON.parse(msg.toString()))
        getTeaID(JSON.parse(msg.toString()))
    }
}

function getTeaID(entry) {
    const name = entry.tea
    const sql_query = "SELECT tea_id FROM teas WHERE tea_name = (?);";
    con.query(sql_query, name, function(error, rows) {
        insertEntry(rows[0].tea_id, entry.name, entry.entry, entry.date)
    })
}

function insertEntry(tea, name, entry, date) {
    const sql_query = "INSERT INTO `entries`(`tea_id`, `name`, `comment`, `date`) VALUES ((?),(?),(?),(?))";
    const values = [tea, name, entry, date]
    con.query(sql_query, values, function(error, rows) {
        if (error) {
            console.error('Error inserting data:', error);
            return;
        }
        console.log('Entry inserted');
        sendEntries(tea)
    })
}

function sendEntries(tea_id) {
    const sql_query = "SELECT `name`, `comment`, `date` FROM `entries` WHERE tea_id = (?) ORDER BY `entries`.`date` DESC";
    con.query(sql_query, tea_id, async function(error, rows) {
        const sock = new zmq.Request();
        sock.connect('tcp://localhost:5555');
        await sock.send(JSON.stringify(rows));
        await sock.receive();
        await sock.close();
    })
}

receiveEntry().catch(err => console.error(err));