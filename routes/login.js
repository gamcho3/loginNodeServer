const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();
const passport = require('passport');


// Setting the naver oauth routes
router.get('/naver', 
    passport.authenticate('naver', null), function(req, res) {
        console.log('/auth/naver failed, stopped');
    });

// creates an account if no account of the new user
router.get('/naver/callback', 
    passport.authenticate('naver', {
        failureRedirect: '#!/auth/login'
    }), function(req, res) {
        res.redirect('/'); 
    });

router.get('/',loginController.login);

module.exports = router