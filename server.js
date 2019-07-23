const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/getuserdata', (req, res) => {
    res.json({user: 'Mukesh',
    projecttype: 'WAH'
    });
});

require('./app/routes/reports.routes.js')(app);

app.listen(5000, () => {
    console.log("Server is listening on port 3000");
});