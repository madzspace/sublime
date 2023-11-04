// if (process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/css/main.min.css', (req, res) => {
    // Set the 'Content-Type' header to 'text/css' before sending the CSS file
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/css/main.min.css');
  });

const mongoose = require('mongoose')
const dbUrl = "mongodb+srv://madzacuzar:test1620@cluster0.ghimlbe.mongodb.net/your-database-name?retryWrites=true&w=majority&appName=AtlasApp"

mongoose.connect(dbUrl).then(() => {
    console.log(`Server is running on http://localhost:3000`);
}).catch((e) => {
    console.error('Error connecting to Database:', err);
})
// mongoose.connect(process.env.DATABASE_URL)

// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => {
//     console.log('Connected to Mongoose')
// })

app.use('/', indexRouter)
app.use('/admin', userRouter)

app.listen(process.env.PORT || 3000)