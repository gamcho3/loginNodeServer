const getDb = require('../util/database').getDb

class User{
    constructor(name,email,imgUrl){
this.name = name;
this.email = email;
this.imgUrl = imgUrl;
    }
    save(){
        const db = getDb;
        db.collection('user').insertOne(this).then(result =>{
            console.log(result);
        }).catch(err=>{
            console.log(err)
        })
    }
}