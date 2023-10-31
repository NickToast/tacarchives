const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const app = express();
const multer = require('multer');
const path = require('path')


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
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
});

//multer({storage}) property takes storage engine, and that engine tells multer where and how to store our files
//multer middleware
const upload = multer({storage: fileStorageEngine})

app.post('/upload', upload.single('file', 'formData'), (req, res) => {
    const dataForm = JSON.parse(req.body.formData)
    // Destructure
    const { name, price, grade, category } = dataForm
    // console.log(name, price, grade, category)
    console.log(req.file);
    Pin.create({
        name: name,
        price: price,
        grade: grade,
        category: category,
        image: req.file.filename
    })
        .then(result => {
            res.json(result)
        })
        .catch((err) => console.log(err))
});

app.post('/multiple', upload.array('image'), (req, res) => {
    console.log(req.body);
    res.send('Multiple files upload success');
})

const userRoutes = require('./routes/user.routes.js');
const Pin = require('./models/pin.model.js');
userRoutes(app);

app.use('/', require('./routes/auth.routes.js'), require('./routes/pin.routes.js'))
// app.use('/users', require('./routes/user.routes.js'))
// app.use('/auth', require('./routes/auth.routes.js'))

// const routeAttacher = require('./routes/pin.routes')
// routeAttacher(app);



app.listen(port, () => console.log(`Listening on port: ${port}`))