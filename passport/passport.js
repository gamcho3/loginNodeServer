const passport = require('passport')
const naverStrategy = require('./naverStrategy')

module.exports = () =>{
    passport.serializeUser(function (user, done) {
        console.log('serializeUser() 호출됨.');
        done(null, user) // user 객체가 deserializeUser로 전달되는 부분입니다.
    })
    passport.deserializeUser(function (id, done) {
        console.log('deserializeUser() 호출됨.');
        done(null, id) // id가 req.id가 됩니다.
    })
    naverStrategy();
}