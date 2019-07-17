const express = require('express');

const router = express.Router();

//Login page
router.get('/login', (req, res) => res.render('login'))

//Register page
router.get('/register', (req, res) => res.render('register'))

//Rider/passenger filter page
router.get('/filter', (req, res) => res.render('selectFilter'))

//Rides offered page
router.get('/drivers', (req, res) => res.render('drivers'))

//Rides requested page
router.get('/passengers', (req, res) => res.render('passengers'))

//Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
    console.log(req.body)

    //Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields'});
    }

    if(password !== password2) {
        errors.push({msg: 'Passwords do not match'})
    }

    if(password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters'})
    }

    //If anny errors exist, display them in messages partial
    if(errors.length > 0) {
        console.log(errors)
        res.render("register", {
            errors,
            name,
            email,
            password,
            password2
        
        })
    } else {
        res.send('pass')
    }

    console.log(errors)
});

module.exports = router;