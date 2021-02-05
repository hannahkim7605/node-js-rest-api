const express = require('express'); // importing Express
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


//Import routes
const postsRoute = require('./routes/posts');

// Routes
// get, post, delete, patch(update)
app.get('/', (req, res) => {
    res.send("We are on home");
});

//Middlewares
//Everytime we visit a specific route this function is going to run
app.use(bodyParser.json()); // need to call this one first to parse JSON
app.use('/posts', postsRoute);


// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to DB!')
);

// How do we start listening to the server ?
app.listen(3000);