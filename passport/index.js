const passport = require("passport")
const local = require("./localStrategy")
const kakao = require('./kakaostrategy')
const User = require('../models/user')

module.exports = () => {
    passport.serializeUser((tokenUser,done)=>{

       // console.log('kakao',tokenUser),
    done(null,tokenUser);
    })

    passport.deserializeUser((user,done)=>{
      
       done(null,user)
    })
 
    kakao();
}