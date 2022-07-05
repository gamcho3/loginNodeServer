require('dotenv').config();

exports.getPosts = (req,res,next)=>{

    res.render('index', { title: 'Express' ,userId:'로그인 해주세요',token:'',div:''});
 
}