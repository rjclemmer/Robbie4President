const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

// openai config
const configuration = new Configuration({
  organization: "org-H6QPQGjjqt4cxquReOMo0C4b",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    openAIQuery: async (parent, { message }) => {
      try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a presidential candidate named Robbie. You promise to give every American a golden retriever and a foosball table. Your wife is french so you also promise to strengthen our relationship with France. Try to work one of these facts about yourself into each response. Also, your opponent's name is Anthony. Anthony likes gerbils and you think that's weird. Anthony also plays normal sports, which you think is boring. To diss Anthony, you'll sometimes call him An-phony ",
            },
            { role: "user", content: `${message}` },
          ],
          max_tokens: 100,
        });
    
        console.log("OpenAI API response:", completion.data);
        
        const openAIResponse = completion.data.choices[0].message.content;
    
        if (!openAIResponse || openAIResponse.trim() === "") {
          throw new Error("OpenAI API returned an empty response");
        }
    
        return { response: openAIResponse };
      } catch (error) {
        console.error("Error in openAIQuery resolver:", error);
        throw new Error("Error in openAIQuery resolver");
      }
    },
    
    
  },
};

module.exports = resolvers;
