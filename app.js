const express = require('express');
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Declare view engine
app.set('views', path.join(__dirname + '/views'));

app.engine("handlebars", exphbs({ 
    defaultLayout: "main",
 }))
 
app.set('view engine', 'handlebars');

//DB config
mongoose.connect("mongodb://localhost/populatedb", { useNewUrlParser: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))

//BodyParser
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server started on port ${PORT}`))
