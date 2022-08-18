const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "movitdatabase"
});

app.get('/', (req, res) => {
    db.query("INSERT INTO usuarios (email, password) VALUES ('felipek2002k@gmail.com', '12345678')")
});

app.listen(3000, () => {
    console.log('Escutando a Porta 3000!');
});