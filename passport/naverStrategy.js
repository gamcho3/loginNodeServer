require("dotenv").config();
const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;

module.exports = () => {
    passport.use(
        new NaverStrategy(
           {
              clientID: process.env.NAVER_ID,
              clientSecret: process.env.NAVER_SECRET,
              callbackURL: '/',
             authType: 'reauthenticate'
           },
           async (accessToken, refreshToken, profile, done) => {
           
              try {
               console.log('naver profile : ', profile);
               console.log('naver profile : ', NaverProfile);
               done(null,profile);
               //   const exUser = await User.findOne({
               //      // 네이버 플랫폼에서 로그인 했고 & snsId필드에 네이버 아이디가 일치할경우
               //      where: { snsId: profile.id, provider: 'naver' },
               //   });
               //   console.log(exUser);
               //   // 이미 가입된 네이버 프로필이면 성공
               //   if (exUser) {
               //      done(null, exUser);
               //   } else {
               //      // 가입되지 않는 유저면 회원가입 시키고 로그인을 시킨다
               //      const newUser = await User.create({
               //         email: profile.email,
               //         nick: profile.name,
               //         snsId: profile.id,
               //         provider: 'naver',
               //      });
               //      done(null, newUser);
               //   }
               
              } catch (error) {
                 console.error(` naver login error ${error}`);
                 done(error);
              }
           },
        ),
     );
}
