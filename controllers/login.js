const passport = require('passport');
const { Strategy: NaverStrategy, Profile: NaverProfile } = require('passport-naver-v2');

exports.login = (req,res,next)=>{
    passport.use(
        new NaverStrategy(
           {
              clientID: '0oiWMseEgLIbBqV5YSbl',
              clientSecret: 'MuDMemcM2W',
              callbackURL: '/',
           },
           async (accessToken, refreshToken, profile, done) => {
              console.log('naver profile : ', profile);
              try {
                 const exUser = await User.findOne({
                    // 네이버 플랫폼에서 로그인 했고 & snsId필드에 네이버 아이디가 일치할경우
                    where: { snsId: profile.id, provider: 'naver' },
                 });
                 // 이미 가입된 네이버 프로필이면 성공
                 if (exUser) {
                    done(null, exUser);
                 } else {
                    // 가입되지 않는 유저면 회원가입 시키고 로그인을 시킨다
                    const newUser = await User.create({
                       email: profile.email,
                       nick: profile.name,
                       snsId: profile.id,
                       provider: 'naver',
                    });
                    done(null, newUser);
                 }
              } catch (error) {
                 console.error(error);
                 done(error);
              }
           },
        ),
     );
    res.render('login',{kakaoUrl:"hello"});
}