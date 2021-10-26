const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library')


const Schema = mongoose.Schema;
const AdminSchema = new Schema({

    username : String,
    password : String
    
});

var Admindata = mongoose.model('admin',AdminSchema);

module.exports = Admindata;