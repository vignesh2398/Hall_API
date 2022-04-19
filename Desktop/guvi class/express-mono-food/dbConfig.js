const mongodb=require('mongodb');
const MongoClient = mongodb.MongoClient;
let dbName='B28WE';
let dburl=`mongodb+srv://vignesh98:Vignesh199824@cluster0.487qx.mongodb.net/test/${dbName}`;
module.exports={dburl,mongodb,MongoClient}
