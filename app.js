const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mysql = require("mysql");
const zmq = require('zeromq');

const con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "root",
    database: "Moods"
})

async function receiveMood() {
    const sock = new zmq.Reply();
    await sock.bind('tcp://*:5550');
    for await (const [msg] of sock) {
        await sock.send("Mood received");
        console.log(JSON.parse(msg.toString()))
        getTea(JSON.parse(msg.toString()))
    }
}

receiveMood().catch(err => console.error(err));

function getTea(mood) {
    const sql_query =
        "SELECT tea_name\
        FROM teas JOIN tea_moods ON teas.tea_id = tea_moods.tea_id\
        JOIN moods ON tea_moods.mood_id = moods.mood_id\
        WHERE moods.mood_name IN (?)";
    con.query(sql_query, mood.mood, async function(error, rows) {
        const number = Math.floor(Math.random() * rows.length);
        console.log(rows[number])
        const sock = new zmq.Request();
        sock.connect('tcp://localhost:5551');
        await sock.send(JSON.stringify(rows[number]));
        await sock.receive();
        await sock.close();
    })
}