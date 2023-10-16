const express = require('express');
const app = express()
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
require('./config/mongoose.config.js')
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use( express.urlencoded({ extended: true }) );
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());

const userRoutes = require('./routes/user.routes.js')
userRoutes(app);

// const routeAttacher = require('./routes/pin.routes')
// routeAttacher(app);



app.listen(port, () => console.log(`Listening on port: ${port}`))