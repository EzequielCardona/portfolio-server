const express = require('express');
const app = express();
require('dotenv').config();
const leadsRouter = require('./routes/leads');

app.use(express.json());

app.use('/api/leads', leadsRouter);

app.get('/', (request, response) => {
  response.send("Server is up and running");
});

app.listen(process.env.PORT, () => {
  console.log('Server up and running on port: ' + process.env.PORT);
});
