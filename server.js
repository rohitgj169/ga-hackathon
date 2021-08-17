const express = require('express');
const path = require('path');
const logger = require('morgan');
// const usersRouter = require("./routes/api/users")
const usersRouter = require("./routes/users")
const projectsRouter = require("./routes/api/projects")
var cors = require('cors')



const app = express();

app.use(logger('dev'));
require ('dotenv').config();

// Connect to the database
require('./config/database');

app.use(cors())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
// app.use("/api/users", usersRouter );
app.use("/users", usersRouter );
// app.use("/api/projects", projectsRouter);



const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});