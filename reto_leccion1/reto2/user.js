const mongoose= require('mongoose');

const UserSchema = new mongoose.Schema({
    login: String,
    password: Number
})

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Number,
    comments: String,
    rol: String
})

const CredentialsSchema = new mongoose.Schema({
    adress: String,
    phone: Number,
    email: String,
})

// Si la coleccion existe la agrega a la coleccion user y si no existe crea una coleccion con ese nombre user

const UserModel = mongoose.model('user', UserSchema);
const ProfileModel = mongoose.model('person', ProfileSchema)
const CredentialsModel = mongoose.model('data', CredentialsSchema)


module.exports={
    UserModel,
    ProfileModel,
    CredentialsModel
}