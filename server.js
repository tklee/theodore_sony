const http = require('http');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
//app.use(cors())

//app.get('*', function(req, res) {
//  res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});

app.listen(3002);
