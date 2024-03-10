const mongoose = require('mongoose');
const Photo = require('./model');


// Función para guardar una nueva foto en la colección 'photos'
const savePhoto = async (username, url, title, description) => {
  try {
    // Crear un nuevo documento 'Photo' con la información proporcionada
    const newPhoto = new Photo({
      username: username,
      url: url,
      title: title,
      description: description
    });

    // Guardar el nuevo documento en la base de datos
    await newPhoto.save();

    console.log('La foto ha sido guardada con éxito en la colección \'photos\'.');
  } catch (error) {
    console.error('Error al guardar la foto:', error);
  }
};

// Uso de la función
// savePhoto('UserOne', 'https://userone.com/foto.jpg', 'Títle One', 'Description One');




// Función para obtener todas las fotos de un usuario específico
const getPhotosByUser = async (username) => {
  try {
    // Buscar todas las fotos que coincidan con el nombre de usuario
    const photos = await Photo.find({ username: username });

    // Si se encuentran fotos, mostrarlas
    if (photos.length > 0) {
      console.log(`Fotos encontradas para el usuario ${username}:`, photos);
    } else {
      console.log(`No se encontraron fotos para el usuario ${username}.`);
    }
  } catch (error) {
    // Enviar una respuesta de error
    console.error('Error al obtener las fotos:', error);
  }
};

// Ejemplo de uso de la función
// getPhotosByUser('Rafa');



// Función para modificar la descripción de una foto dado su título
async function editDescription(title, newDescription) {
  try {
      await Photo.updateOne({ title: title }, { description: newDescription });
      console.log('Descripción ${nuevaDescripcion} modificada correctamente');
  } catch (error) {
      console.error('Error al modificar la descripción:', error);
  }
}

// editDescription('Diapositiva Arboles', 'Arboles con atardecer');


// Función para eliminar una foto dado un usuario y un título

const deletePhotoByUserAndTitle = async (username, title) => {
  try {
    // Eliminar la foto que coincida con el nombre de usuario y el título
    const result = await Photo.deleteOne({ username: username, title: title });

    // Verificar si se eliminó algún documento
    if (result.deletedCount > 0) {
      console.log(`La foto con el título '${title}' del usuario '${username}' ha sido eliminada.`);
    } else {
      console.log(`No se encontró la foto con el título '${title}' del usuario '${username}'.`);
    }
  } catch (error) {
    console.error('Error al eliminar la foto:', error);
  }
};

// Ejemplo de uso de la función
// deletePhotoByUserAndTitle('Miguel', 'Paisaje atardecer');



// Función para eliminar todas las fotos de un usuario específico
const deletePhotosByUser = async (username) => {
  try {
    // Eliminar todas las fotos que coincidan con el nombre de usuario
    const result = await Photo.deleteMany({ username: username });

    // Verificar si se eliminaron documentos
    if (result.deletedCount > 0) {
      console.log(`Todas las fotos del usuario '${username}' han sido eliminadas.`);
    } else {
      console.log(`No se encontraron fotos para el usuario '${username}'.`);
    }
  } catch (error) {
    console.error('Error al eliminar las fotos:', error);
  }
};

// Ejemplo de uso de la función
deletePhotosByUser('Ruben');