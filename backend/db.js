const mongoose=require('mongoose');

const username = process.env['MONGO_USER_NAME'];
const password = process.env['MONGO_USER_PASSWORD'];

const mongoURI=`mongodb+srv://NurulHasan:9jVQczGKyVFpYVMJ@cluster0.b0ian0n.mongodb.net/`;
const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{                         // this is Call back function you can give asyn function
         console.log("Connected to mongo Successfully");    // also  
    })
}


module.exports = connectToMongo;   