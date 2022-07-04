require('dotenv').config();

exports.getPosts = (req,res,next)=>{
    res.render('index', { title: 'Express' ,naverId:process.env.NAVER_ID});
 
}