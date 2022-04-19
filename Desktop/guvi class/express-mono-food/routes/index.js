var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const {dburl,mongodb,MongoClient}=require('../dbConfig')
//getting all food
router.get('/',async(req,res)=>{

})
//getting food by category
router.get('/type',(req,res)=>{
  
})
//create food
router.post('/',async(req,res)=>{
  const client= await MongoClient.connect(dburl);
  try{
const db =await client.db('B28WE')
let food=await db.collection('food').insertOne(req.body);
res.send({
  statusCode:200,
  message:"Food Added Successfully",
  data:food
})
  }
  catch(error){
    console.log(error);
    res.send
    ({statusCode:500,
    message:"Internal server error"})
  }
  finally{
    client.close();
  }
  
})
//update food
router.put('/type',(req,res)=>{
  
})

//delete food
router.delete('/',(req,res)=>{
  
})

module.exports = router;
