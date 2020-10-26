'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { 
  handleClients, 
  handleClientsId,
  handleAddNewClient,
  handleDelete
  } = require('./handlers/clientHandlers');
const { 
  handleWords, 
  handleRandomWord,
  handleGuessLetter } = require('./handlers/hangmanHandlers');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get('/clients', handleClients) 

  .get('/clients/:id', handleClientsId)

  .post('/clients', handleAddNewClient)

  .delete('/clients/:id', handleDelete)

  .get ('/hangman/word', handleRandomWord)

  .get('/hangman/word/:id', handleWords)  

  .get('/hangman/guess/:id/:letter', handleGuessLetter)

  .listen(8000, () => console.log(`Listening on port 8000`));
