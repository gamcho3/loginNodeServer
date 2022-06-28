exports.login = (req,res,next)=>{
    const baseUrl = 'https://kauth.kakao.com/oauth/authorize';
    const config = {
        client_id: "2288cf1bde25c047fd3c8ed2b8fdc6da",
    redirect_uri: "http://localhost:3000",
    response_type: "code",
    }
    res.render('login',{kakaoUrl:"hello"});
}