'use strict'

//this is middle ware for sign in auth 
const {user} =require('../models/seq-index.js');
const bcrypt=require('bcrypt');
const base64 = require('base-64');

const basicAuth=async(req,res,next)=>{

  if (req.headers['authorization']) {
    let bhp=req.headers.authorization.split(' ');
    let encoded=bhp.pop();
    let decode=base64.decode(encoded);
    let [name,password]=decode.split(':');
      try {
        console.log("hello its try ");
   const user1 =await user.findOne({where:{name:name}});
   console.log(user1);
   const valid=await bcrypt.compare(password,user1.password);
   console.log(valid);
   if(valid){
     
    res.status(200).json({name:name});
   
   }
   else{
    res.send("invalid password");
   } }
  catch (e) { console.log("problem in create user") }
}

}
module.exports=basicAuth;