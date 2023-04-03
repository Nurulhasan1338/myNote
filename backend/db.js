const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/Inote";

const connectToMongo=()=>{
    mongoose.connect(mongoURI, ()=>{                         // this is Call back function you can give asyn function
         console.log("Connected to mongo Successfully");    // also  
    })
}


module.exports = connectToMongo;   