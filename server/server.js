const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const app = express()
//database connection
require('./config/mongoose.config.js')
const cookieParser = require('cookie-parser');

//middleware
app.use(express.json());
app.use( express.urlencoded({ extended: true }) );
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());

const userRoutes = require('./routes/user.routes.js')
userRoutes(app);

app.use('/', require('./routes/auth.routes.js'))
// app.use('/users', require('./routes/user.routes.js'))
// app.use('/auth', require('./routes/auth.routes.js'))

// const routeAttacher = require('./routes/pin.routes')
// routeAttacher(app);



app.listen(port, () => console.log(`Listening on port: ${port}`))