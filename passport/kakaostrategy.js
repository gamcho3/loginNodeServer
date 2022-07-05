const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy;

const User = require('../models/user')

module.exports = () =>{
    passport.use('kakao', new KakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/login/kakao/callback',     // 위에서 설정한 Redirect URI
      }, async (accessToken, refreshToken, profile, done) => {
    
        try{
            console.log(accessToken);
            console.log(refreshToken);
            const tokenUser = {
                user : profile,
                token : accessToken || ''
            }
            done(null,tokenUser);
        }catch(e){
            console.log(e);
            done(e)
        }    
    }))
}