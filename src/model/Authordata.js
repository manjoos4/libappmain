const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.7gpgq.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    author:String,
    genre:String,
    image:String
});
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;