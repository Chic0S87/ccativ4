const express = require('express');
const os = require('os');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'atividade4'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err.stack);
    return;
  }
  console.log('Conectado ao Banco de dados');
});

app.get('/consulta-dados', (req, res) => {
  const query = "SELECT * FROM filmes";  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta: ' + err);
      return res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
    return res.status(200).json(results);
  });
});

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Olá'
  });
});

app.get('/liveness', (req, res) => {
  return res.status(200).json({
    message: 'Meu app está vivo, eu estou morto por dentro',
    path: process.cwd(),
  });
});

app.get('/readiness', (req, res) => {
  return res.status(200).json({
    message: 'Meu app está pronto, eu não',
    platform: os.platform(),
    freemem: os.freemem(),
    homedir: os.homedir(),
    date: new Date().getTime()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Erro ao encerrar a conexão com o MySQL: ' + err.stack);
    } else {
      console.log('Conexão com o MySQL encerrada');
    }
    process.exit();
  });
});



// const express = require('express');
// const os = require('os');
// const mysql = require('mysql2');
// const app = express();

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'root',
//   database: 'atividade4'
// });

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err.stack);
    return;
  }
  console.log('Conectado ao Banco de dados');
})


app.get('/consulta-dados', (req, res) => {
  const query = "SELECT * FROM filmes";  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta: ' + err);
      return res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
    return res.status(200).json(results);
  })

});


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