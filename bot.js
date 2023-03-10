const tmi = require('tmi.js');
require('dotenv').config();

const env = process.env;

const opts = {
  identity: {
    username: env.TWITCH_USERNAME,
    password: env.TWITCH_TOKEN
  },
  channels: [
    env.TWITCH_CHANNEL
  ]
};