//Appeller express
const express = require('express');
const pool = require('./db');
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');
//Instancier l'application avec
const app = express() ;

// log only 4xx and 5xx responses to console
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))
   
  // log all requests to access.log
  app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
  }))

//GET
app.get('/', async (req,res) =>{
    res.json("Welcome to the AWC : Master 2 ");
}
);

//GET /users
app.get('/users', async (req,res) =>{
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erreur du serveur');
    }
});

//GET /users/:id
app.get('/users/:id', async (req,res) =>{
    res.json("GETting is OK");
});

//PUT /users/:id
app.put('/users/:id', async (req,res) =>{
    res.json("PUTting is OK");
});

//DELETE /users/:id
app.delete('/users/:id', async (req,res) =>{
    res.json("DELETing is OK");
});



//Demarrge de l'appli sur un port defini par défaut ou à travers
// la valeur dans .env

module.exports = app ;
if(require.main === module){
    const PORT = process.env.PORT || 3000 ;

    app.listen(PORT, () =>{
    console.log(`Serveur démarré sur le port ${PORT}`);
    });
}
