const mongoose=require('mongoose');
//const Schema=mongoose.Schema
const {Schema}=mongoose;//destrcuting way of declaring object for schema of mongoose
const userSchema=new Schema({
    googleId:String,
    googleName:String
});
mongoose.model('users',userSchema);