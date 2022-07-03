const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback)=>{
    MongoClient.connect('mongodb+srv://park:qkrdydwls3@cluster0.f6caf.mongodb.net/?retryWrites=true&w=majority')
    .then(client =>{
        console.log('mongodb connect');
        _db = client.db();
        callback();
    }).catch(err => {
        console.log(err)
    });
}

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw "no database"
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

