const express = require('express');
const loginController = require('../controllers/login');
const router = express.Router();
const passport = require('passport');


router.get('/naver', passport.authenticate('naver', { authType: 'reprompt' }));

router.get(
    '/naver/callback',
    passport.authenticate('naver', { failureRedirect: '/' }),
    (req, res) => {
       res.redirect('/');
    },
 );

router.get('/',loginController.login);

module.exports = router