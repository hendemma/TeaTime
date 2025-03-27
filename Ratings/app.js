const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mysql = require("mysql");
const zmq = require('zeromq');

const con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "root",
    database: "Ratings"
})

async function receiveRating() {
    const sock = new zmq.Reply();
    await sock.bind('tcp://*:5552');
    for await (const [msg] of sock) {
        await sock.send("Rating received");
        console.log(JSON.parse(msg.toString()))
        getTeaID(JSON.parse(msg.toString()))
    }
}

function getTeaID(rating) {
    const name = rating.tea
    const sql_query = "SELECT tea_id FROM teas WHERE tea_name = (?);";
    con.query(sql_query, name, function(error, rows) {
        insertRating(rows[0].tea_id, parseInt(rating.rating))
    })
}

function insertRating(tea, rating) {
    const sql_query = "INSERT INTO `ratings`(`tea_id`, `rating`) VALUES ((?), (?))";
    const values = [tea, rating]
    con.query(sql_query, values, function(error, rows) {
        if (error) {
            console.error('Error inserting data:', error);
            return;
        }
        console.log('Rating inserted');
        getAverage(tea)
    })
}

function getAverage(tea_id) {
    const sql_query = "SELECT AVG(rating) AS average FROM ratings WHERE tea_id = (?);";
    con.query(sql_query, tea_id, async function(error, rows) {
        const average_rating = Math.floor(rows[0].average)
        console.log(average_rating);
        const sock = new zmq.Request();
        sock.connect('tcp://localhost:5553');
        await sock.send(average_rating);
        await sock.receive();
        await sock.close();
    })
}

receiveRating().catch(err => console.error(err));
