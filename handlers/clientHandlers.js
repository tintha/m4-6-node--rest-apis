const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// access list of all clients
const handleClients = (req, res) => {
  res.status(200).json({
    status: 200,
    data: clients
  })
}

// access one client based on its id
const handleClientsId = (req, res) => {
  const { id } = req.params;
  const client = clients.find((client) => client.id === id);
  if (!client) {
    res.status(400).json({
      status: 400,
      message: 'Client not found.'
    })
  } else {
    res.status(200).json({
      status: 200,
      data: client
    })
  }
}

// add new client
const handleAddNewClient = (req, res) => {
  const newClient = req.body;
  const { 
    isActive,
    age, 
    name,
    gender,
    company,
    email,
    phone,
    address
  } = newClient;

  // generate id number
  newClient.id = uuidv4();
  
  // check if client already exists
  const clientExists = clients.find((client) => client.email === newClient.email);

  if (clientExists !== undefined) {
    res.status(400).json({
      status: 400,
      message: 'Client already exists'
    })
  } else {
    res.status(201).json({
      status: 201,
      message: 'Sucessfully created new client',
      data: newClient,
    })
  }
}

const handleDelete = (req, res) => {
  const { id } = req.params;
  const client = clients.find((client) => client.id === id);
  if (!client) {
    res.status(400).json({
      status: 400,
      message: 'Client not found'
    })
  } else {
    res.status(202).json({
      status: 202,
      message: `${client.name} has been deleted`
    })
  }
}

module.exports = { 
  handleClients, 
  handleClientsId, 
  handleAddNewClient,
  handleDelete };