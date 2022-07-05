require('dotenv').config();
exports.login = (req,res,next)=>{
    //console.log(req.session.passport);
    res.render('login',{naverId:process.env.NAVER_ID,naverSecret:process.env.NAVER_SECRET});
}