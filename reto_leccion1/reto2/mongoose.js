const mongoose= require('mongoose');

// const {UserModel}= require('./user');
const {UserModel}= require('./userValidation')
const {ProfileModel}= require('./user');
const {CredentialsModel}= require('./user');

const urlRemote = 'mongodb+srv://rubengd93:921whT5VRJuPpd1k@cluster0.edkbpm9.mongodb.net/Codenotch2'

mongoose.connect('mongodb+srv://rubengd93:921whT5VRJuPpd1k@cluster0.edkbpm9.mongodb.net/Codenotch2')

// Crear Usuario
const member = new UserModel({
    login: "rubengd93@gmail.com",
    password: 332324
})

const profile = new ProfileModel({
    name:"Ruben",
    surname: "Vera",
    dateOfBirth: 30,
    comments: "Usuario 1",
    rol: "Diseño UI/UX Maquetador Web"
})

const credential1 = new CredentialsModel({
    adress:"Periodista Pérez, 21",
    phone: 646051440,
    email:"rubengd93@gmail.com"
})


// Guardar en la base de datos
member.save().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});

profile.save().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});

credential1.save().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});


