require("dotenv").config();

const mongoose = require('mongoose');
const DBconnect = ()=>{
    mongoose.connect(process.env.MONGO_URI).then((res)=>{
        console.log("connected to the DataBase");
    });
}

module.exports = DBconnect;