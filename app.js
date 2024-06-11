const express = require('express');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Olá'
  });
});

app.get('/liveness', (req, res) => {
  return res
  .status(200)
  .json({
      message: 'Meu app está vivo , eu estou morto por dentro',
      path: process.cwd(),
      
  });
});

app.get('/readiness', (req, res) => {
  return res.status(200).json({
    message: 'Meu app está pronto , eu não',
    platform: os.platform(),
    freemem: os.freemem(),
    homedir: os.homedir(),
    date: new Date().getTime()
  });
});









module.exports = app;