'use strict'
const bcrypt=require('bcrypt');
const base64 = require('base-64');
const express = require('express');
const { user } = require('../models/seq-index.js');// get the model from the export in index.js
const basicAuth=require('../middleware/basic-auth.js');
const router = express.Router(); //get method router 

//routs
router.post('/signIn',basicAuth,signIn);

//----------------------------------------------------
async function signIn(req, res) {
  res.status(200).json(req.userSigned);

 
}
module.exports = router;