require('dotenv').config();

exports.getPosts = (req,res,next)=>{

    res.render('index', { title: 'Express' ,userId:'no'});
 
}