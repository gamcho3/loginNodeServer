const express = require('express');
const router = express.Router();
const axios = require('axios')
//kakao logout

router.get('/', async (req,res)=>{
    
    try {
        const ACCESS_TOKEN = req.query.token;
        let logout = await axios({
          method:'post',
          url:'https://kapi.kakao.com/v1/user/unlink',
          headers:{
            'Authorization': `Bearer ${ACCESS_TOKEN}`
          }
        });
      } catch (error) {
        console.error(error);
        res.json(error);
      }
      // 세션 정리
      req.logout((err)=>{
        if (err) { return next(err); }
        req.session.destroy();
        res.redirect('/');
      });
    
      
      
})

module.exports = router