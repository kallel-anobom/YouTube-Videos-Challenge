const express = require('express');

const VideoController = require('./controllers/VideoController');

const routes = express.Router();

routes.post('/video', VideoController.index);

module.exports = routes;
