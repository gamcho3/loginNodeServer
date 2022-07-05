const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoose = require('mongoose');



const mongoConnect = (callback)=>{
    mongoose.connect('mongodb+srv://park:qkrdydwls3@cluster0.f6caf.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('mongodb & mongoose connect');
       
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

