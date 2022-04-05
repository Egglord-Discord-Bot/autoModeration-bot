const { Client } = require('discord.js'),
	{ token } = require('./config'),
	client = new Client();

client.login(token);
