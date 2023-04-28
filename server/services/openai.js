const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;
require('dotenv').config();

const configuration = new Configuration({
  organization: "org-H6QPQGjjqt4cxquReOMo0C4b",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;
