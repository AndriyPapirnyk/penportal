const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//

const authRoute = require('./src/routes/auth.route');
const { dbConnect } = require('./utils/database');
const PORT = process.env.PORT;

dbConnect();

const app = express();

//

app.use(cors());
app.use(bodyParser.json());

//

app.use('/api', authRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})