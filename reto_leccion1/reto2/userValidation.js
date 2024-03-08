const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Puedes ajustar el número de rondas de sal

// saltRound en el contexto de bcrypt se refiere al factor de coste 
// que controla cuánto tiempo se necesita para calcular un solo hash 
// de BCrypt. Cuanto mayor sea el factor de coste, más rondas de hashing 
// se realizan. Aumentar el factor de coste en 1 duplica el tiempo necesario. 
// Cuanto más tiempo se necesite, más difícil será la fuerza bruta. La sal es 
// un valor aleatorio y debe ser diferente para cada cálculo, por lo que el 
// resultado casi nunca debe ser el mismo, incluso para contraseñas iguales

const userSchema = new mongoose.Schema({
    login: {
      type: String,
      required: [true, 'El campo login es obligatorio'],
      match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Por favor, introduce un email válido']
    },
    password: {
      type: String,
      required: [true, 'El campo password es obligatorio'],
      minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
    }
    // Añade aquí más campos según tu esquema
  });
  
  // Middleware para encriptar la contraseña antes de guardar
  userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      // Aquí puedes usar una librería como bcrypt para encriptar la contraseña
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });
  
  const UserModel = mongoose.model('User', userSchema);

  module.exports={
    UserModel 
  }


  // Añade validaciones al campo login para asegurarse de que 
  // es un correo electrónico válido y al campo password para verificar que 
  // tiene al menos 6 caracteres. Además, incluye un middleware que se ejecutaría 
  // antes de guardar un documento para encriptar la contraseña