const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback)=>{
    MongoClient.connect('mongodb+srv://park:qkrdydwls3@cluster0.f6caf.mongodb.net/?retryWrites=true&w=majority')
    .then(result =>{
        console.log('success');
        callback(result);
    }).catch(err => {
        console.log(err)
    });
}

module.exports = mongoConnect;

