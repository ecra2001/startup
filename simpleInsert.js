const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const config = require('./dbConfig.json');
const url = `mongodb+srv://ecra6157:463564Scott@clusterstartup.nollcz5.mongodb.net/`;

const client = new MongoClient(url);