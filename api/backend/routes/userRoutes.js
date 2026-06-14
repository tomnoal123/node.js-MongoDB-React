const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const cors = require('cors');

const User = require('../models/User');



router.post("/register", async (req, res) =>{
    const {
        username,
        password,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password: hashedPassword,
    });

    res.json(user);
});


router.post("/login", async(req,res)=>{

    const {
        username,
        password
    } = req.body;


    const user = await User.findOne({
        username
    });


    if(!user){
        return res.status(400).json({
            message:"User not found"
        });
    }


    const checkPassword = await bcrypt.compare(
        password,
        user.password
    );


    if(!checkPassword){
        return res.status(400).json({
            message:"Wrong password"
        });
    }



    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1h"
        }
    );


    res.json({
        token
    });


});



module.exports = router;