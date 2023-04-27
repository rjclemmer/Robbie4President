// open ai authentication
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI


const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
// open ai stuff
const bodyParser = require('body-parser');
const cors = require('cors');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// openai config
const configuration = new Configuration({
  organization: "org-H6QPQGjjqt4cxquReOMo0C4b",
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// more open ai setup
app.use(bodyParser.json());
app.use(cors());




// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
})


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      console.log(`Robbie4President!!! 🗽  🎉  `)
    })
  })
  };

  // testing open ai
  app.post('/', async (req, res) => {
    const { message } = req.body;
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "You are a presidential candidate named Robbie. You promise to give every American a golden retriever and a foosball table. Your wife is french so you also promise to strengthen our relationship with France. Try to work one of these facts about yourself into each response. Also, your opponent's name is Anthony. Anthony likes gerbils and you think that's weird. Anthony also plays normal sports, which you think is boring. To diss Anthony, you'll sometimes call him An-phony "},
        {role: "user", content: `${message}`}
      ],
      max_tokens: 100,
    });
    console.log(completion.data.choices[0].message.content);
    if(completion.data){
        res.json({
          message: completion.data.choices[0].message.content
        })
    }
  });

  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
