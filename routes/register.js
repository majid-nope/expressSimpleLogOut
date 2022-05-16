var express = require('express');
var router = express.Router();
const database = require('./config/session')
router.get('/', (req, res) => {
    res.render('login')
    
})
router.get('/signup', (req, res) => {
    res.render('signup')
})
router.post('/signup', (req,res) => {
    database.setItem('password', req.body.password)
    database.setItem('email', req.body.email)
    res.redirect('/login')
    
    
   
})
router.post('/', (req, res) => {
    // sessionStorage.setItem('password',req.body.password)

    if (req.body.password == database.getItem('password')) {
        res.redirect('/')
    } else {
        res.redirect('/login/signup')
    }
})


module.exports = router