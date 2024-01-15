const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const databaseConnect = require('./config/database');
const authRouter = require('./routes/authRoute');
const messengerRoute = require('./routes/messengerRoute');

dotenv.config({
  path: 'backend/config/config.env'
});

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/messenger', authRouter);
app.use('/api/messenger', messengerRoute);

app.get('/', (req, res) => {
  res.send('This is from backend Sever');
});

const PORT = process.env.PORT || 5000;

databaseConnect();

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server; // Export the server instance for testing