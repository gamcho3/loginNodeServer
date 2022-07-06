const passport = require("passport");
const naver = require("./naverstrategy");
const kakao = require("./kakaostrategy");
// const User = require('../models/user')

module.exports = () => {
  passport.serializeUser((tokenUser, done) => {
    // console.log('kakao',tokenUser),
    done(null, tokenUser);
    //req.session에 값 저장
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
    //router에 있는 req.user에 저장
  });

  kakao();
  naver();
};
