require('dotenv').config();
exports.login = (req,res,next)=>{
    //console.log(req.session.passport);
    res.render('login');
}