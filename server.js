const express = require('express');
const path = require('path');
const logger = require('morgan');
const router = require('./routes/api/users');

require ('dotenv').config();
// Connect to the database
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
  
//API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/', require('./routes/api/profile'));

//Catch all route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});