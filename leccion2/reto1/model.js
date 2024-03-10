const mongoose= require('mongoose');

const urlRemote = 'mongodb+srv://rubengd93:921whT5VRJuPpd1k@cluster0.edkbpm9.mongodb.net/Codenotch3'

mongoose.connect('mongodb+srv://rubengd93:921whT5VRJuPpd1k@cluster0.edkbpm9.mongodb.net/Codenotch3')


const photoSchema = new mongoose.Schema({
    username: String,
    url: String,
    title: String,
    description: String
  });
  

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;



