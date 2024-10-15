const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./router');
const billboard = require('../data/billboard.json');
const mylist = require('../data/mylist.json');
const videos = require('../data/videos.json');

const app = express();
const PORT = 3000;

const state = {};

function initData() {
  state.billboard = billboard;
  state.mylist = mylist;
  state.videos = videos;
}

function useState(req, res, next) {
  req.state = state;
  next();
}

app.use(express.static('client'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/api', [useState, apiRouter]);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Takehome project is running on ${PORT}`);
  initData();
});
