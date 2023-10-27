const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const app = express();
const multer = require('multer');

//database connection
require('./config/mongoose.config.js')
const cookieParser = require('cookie-parser');

//middleware
app.use(express.json());
app.use( express.urlencoded({ extended: true }) );
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now + '--' + file.originalname);
    },
});

//multer({storage}) property takes storage engine, and that engine tells multer where and how to store our files
//multer middleware
const upload = multer({storage: fileStorageEngine})

app.post('/single', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('Single file upload success');
});

app.post('/multiple', upload.array('images', 10), (req, res) => {
    console.log(req.files);
    res.send('Multiple files upload success');
})

const userRoutes = require('./routes/user.routes.js')
userRoutes(app);

app.use('/', require('./routes/auth.routes.js'))
// app.use('/users', require('./routes/user.routes.js'))
// app.use('/auth', require('./routes/auth.routes.js'))

// const routeAttacher = require('./routes/pin.routes')
// routeAttacher(app);



app.listen(port, () => console.log(`Listening on port: ${port}`))