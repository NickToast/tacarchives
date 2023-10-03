const express = require('express');
const app = express()
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
require('./config/mongoose.config.js')

app.use(express.json());
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

// const routeAttacher = require('./routes/pin.routes')
// routeAttacher(app);



app.listen(port, () => console.log(`Listening on port: ${port}`))