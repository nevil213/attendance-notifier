const express = require('express');
const { connectDB } = require('./mongo');
const startWatch = require('./watch');

const app = express();
app.use(express.json());

const tokenRoute = require('./routes/token');
app.use('/api', tokenRoute);

connectDB().then(() => {
  startWatch();
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});
