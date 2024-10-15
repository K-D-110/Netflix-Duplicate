const express = require('express');

const apiRouter = express.Router();

function randomNum() {
  return Math.floor(Math.random() * 10000);
}

function shouldErr(num) {
  return num % 5 !== 0;
}

apiRouter.get('/mylist', (req, res) => {
  res.json(req.state.mylist);
});

apiRouter.post('/mylist', (req, res) => {
  const { body } = req;
  req.state.mylist = body;
  res.json(body);
});

apiRouter.get('/billboard', (req, res, next) => {
  res.json(req.state.billboard);
});

apiRouter.get('/videos', (req, res) => {
  res.json(req.state.videos);
});

module.exports = apiRouter;
