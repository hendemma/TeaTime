const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const mysql = require("mysql");
const zmq = require('zeromq');
const app = express();
const PORT = 3000;
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.engine('.hbs', engine({extname: ".hbs"}));
app.set('view engine', '.hbs');

const con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "root",
    database: "Tea"
})

// Homepage
app.get('/', function(req, res) {
    res.render('index');
});

// Tea Types Page
app.get('/types', function(req, res) {
    res.render('types.hbs');
});

// Green Tea Page
app.get('/green', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.type = 'Green' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'Green',
            url: 'green',
            back: 'types',
            back_name: "Tea Types"
        });
    })
});

// Black Tea Page
app.get('/black', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.type = 'Black' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'Black',
            url: 'black',
            back: 'types',
            back_name: "Tea Types"
        });
    })
});

// White Tea Page
app.get('/white', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.type = 'White' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'White',
            url: 'white',
            back: 'types',
            back_name: "Tea Types"
        });
    })
});

// Oolong Tea Page
app.get('/oolong', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.type = 'Oolong' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'Oolong',
            url: 'oolong',
            back: 'types',
            back_name: "Tea Types"
        });
    })
});

// Pu'er Tea Page
app.get('/puer', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.type = 'Puer' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: "Pu'er",
            url: 'puer',
            back: 'types',
            back_name: "Tea Types"
        });
    })
});

// Herbal Tea Page
app.get('/herbal', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.type = 'Herbal' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'Herbal',
            url: 'herbal',
            back: 'types',
            back_name: "Tea Types"
        });
    })
});

// Caffeine Page
app.get('/caffeine', function(req, res) {
    res.render('caffeine.hbs');
});

// High Caffeine Page
app.get('/high', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.caffeine = 'High' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'High-Caffeine',
            url: 'high',
            back: 'caffeine',
            back_name: "Caffeine Levels"
        });
    })
});

// Medium Caffeine Page
app.get('/medium', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.caffeine = 'Medium' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'Medium-Caffeine',
            url: 'medium',
            back: 'caffeine',
            back_name: "Caffeine Levels"
        });
    })
});

// Low Caffeine Page
app.get('/low', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.caffeine = 'Low' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'Low-Caffeine',
            url: 'low',
            back: 'caffeine',
            back_name: "Caffeine Levels"
        });
    })
});

// Caffeine-Free Page
app.get('/none', function(req, res) {
    const sql_query =
        "SELECT * FROM teas\
        INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
        WHERE teas.caffeine = 'None' ORDER BY tea_name;";
    con.query(sql_query, function(error, rows) {
        res.render('teas.hbs', {
            data: rows,
            title: 'Caffeine-Free',
            url: 'none',
            back: 'caffeine',
            back_name: "Caffeine Levels"
        });
    })
});

// Flavors Page
app.get('/flavors', function(req, res) {
    const sql_query =
        "SELECT flavors.flavor_name, GROUP_CONCAT(teas.tea_name SEPARATOR ', ') AS teas\
        FROM flavors\
        LEFT JOIN teas ON flavors.flavor_id = teas.flavor_id\
        GROUP BY flavors.flavor_id\
        ORDER BY flavors.flavor_name;";
    con.query(sql_query, function(error, rows) {
        res.render('flavors.hbs', {data: rows});
    })
});

// Finder Page
app.get('/finder', function(req, res) {
    const sql_query1 = "SELECT DISTINCT type FROM teas;";
    const sql_query2 = "SELECT DISTINCT caffeine FROM teas;";
    const sql_query3 = "SELECT flavor_name FROM flavors ORDER BY flavor_name;";
    con.query(sql_query1, function(error, rows) {
        const type_data = rows
        con.query(sql_query2, function(error, rows) {
            const caff_data = rows
            con.query(sql_query3, function(error, rows) {
                res.render('finder.hbs', {
                    type_data: type_data,
                    caff_data: caff_data,
                    flav_data: rows
                });
            })
        })
    })
});

// Finder Results Page
app.post('/submit', (req, res) => {
    const data = req.body;
    const sql_query =
            "SELECT * FROM teas\
            INNER JOIN flavors ON teas.flavor_id = flavors.flavor_id\
            WHERE teas.type IN (?) OR teas.caffeine IN (?) OR flavors.flavor_name IN (?);";
    const values = [
        [
            data["Green"],
            data["Black"],
            data["White"],
            data["Oolong"],
            data["Puer"],
            data["Herbal"]
        ],
        [
            data["High"],
            data["Medium"],
            data["Low"],
            data["None"]],
        [
            data["Bright"],
            data["Citrus"],
            data["Creamy"],
            data["Delicate"],
            data["Floral"],
            data["Grassy"],
            data["Malty"],
            data["Rich"],
            data["Spicy"],
            data["Sweet"],
            data["Toasty"],
            data["Umami"]
        ]
    ];
    con.query(sql_query, values, function(error, rows) {
        res.render('results.hbs', {data: rows});
    })
});

// Ratings Microservice
app.get('/ratings', function(req, res) {
    const sql_query = "SELECT * FROM teas";
    con.query(sql_query, function(error, rows) {
        res.render('ratings.hbs', {data: rows});
    })
});

// Rating Results
app.post('/ratings_submit', async function(req, res) {
    // Send rating to microservice
    sendRating(JSON.stringify(req.body)).catch(err => console.error(err));

    // Receive average from microservice
    const sock = new zmq.Reply();
    await sock.bind('tcp://*:5553');
    for await (const [msg] of sock) {
        await sock.send("Average received");
        let rating = msg.toString()
        if (rating === '1') {
            rating = '★'
        } else if (rating === '2') {
            rating = '★★'
        } else if (rating === '3') {
            rating = '★★★'
        }  else if (rating === '4') {
            rating = '★★★★'
        }  else if (rating === '5') {
            rating = '★★★★★'
        }
        res.render('rating_results.hbs', {data: rating});
        await sock.close();
    }

});

// Sends rating to microservice
async function sendRating(data) {
    const sock = new zmq.Request();
    sock.connect('tcp://localhost:5552');
    await sock.send(data);
    await sock.receive();
    await sock.close();
}

// Messages Microservice
app.get('/message', function(req, res) {
    const sql_query = "SELECT * FROM teas";
    con.query(sql_query, function(error, rows) {
        res.render('message.hbs', {data: rows});
    })
});

// See Messages
app.post('/message_submit', async function(req, res) {
    // Send entry to microservice
    sendEntry(JSON.stringify(req.body)).catch(err => console.error(err));

    // Receive entries from microservice
    const sock = new zmq.Reply();
    await sock.bind('tcp://*:5555');
    for await (const [msg] of sock) {
        await sock.send("Entries received");
        const data = JSON.parse(msg.toString())
        res.render('message_results.hbs', {data: data, tea_name: req.body.tea});
        await sock.close();
    }

});

// Sends entry to microservice
async function sendEntry(data) {
    const sock = new zmq.Request();
    sock.connect('tcp://localhost:5556');
    await sock.send(data);
    await sock.receive();
    await sock.close();
}

// Moods Microservice
app.get('/moods', function(req, res) {
    res.render('moods.hbs');
});

// Moods Results
app.post('/mood_submit', async function(req, res) {
    // Send mood to microservice
    sendMood(JSON.stringify(req.body)).catch(err => console.error(err));

    // Receive tea from microservice
    const sock = new zmq.Reply();
    await sock.bind('tcp://*:5551');
    for await (const [msg] of sock) {
        await sock.send("Tea received");
        const tea = JSON.parse(msg.toString()).tea_name
        res.render('mood_result.hbs', {data: tea});
        await sock.close();
    }

});

// Sends mood to microservice
async function sendMood(data) {
    const sock = new zmq.Request();
    sock.connect('tcp://localhost:5550');
    await sock.send(data);
    await sock.receive();
    await sock.close();
}


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
