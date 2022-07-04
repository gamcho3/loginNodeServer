require('dotenv').config();
exports.login = (req,res,next)=>{
    
    res.render('login',{naverId:process.env.NAVER_ID,naverSecret:process.env.NAVER_SECRET});
}