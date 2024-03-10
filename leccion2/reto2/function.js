const mongoose = require('mongoose');
const {Teacher, Subject, Student, Mark} = require('./models');


// const insertDocuments = async () => {
//     // Insertar un profesor
//     const teacher = new Teacher({
//       firstName: 'Carlos',
//       lastName: 'González',
//       subjects: [] // Aquí irían los IDs de las asignaturas relacionadas
//     });
//     await teacher.save();
  
//     // Insertar una asignatura
//     const subject = new Subject({
//       title: 'Matemáticas'
//     });
//     await subject.save();
  
//     // Insertar un estudiante
//     const student = new Student({
//       firstName: 'Laura',
//       lastName: 'Jiménez',
//       subjects: [], // Aquí irían los IDs de las asignaturas relacionadas
//       marks: [] // Aquí irían los IDs de las notas relacionadas
//     });
//     await student.save();
  
//     // Insertar una nota
//     const mark = new Mark({
//       student: student._id, // Referencia al estudiante
//       subject: subject._id, // Referencia a la asignatura
//       mark: 9.5,
//       date: new Date()
//     });
//     await mark.save();
  
//     // Actualizar los documentos para reflejar las relaciones
//     teacher.subjects.push(subject._id);
//     await teacher.save();
  
//     student.subjects.push(subject._id);
//     student.marks.push(mark._id);
//     await student.save();
  
//     subject.teachers.push(teacher._id);
//     subject.students.push(student._id);
//     await subject.save();
//   };
  
//   insertDocuments().then(() => {
//     console.log('Documentos insertados correctamente.');
//   }).catch(error => {
//     console.error('Error al insertar documentos:', error);
//   });



  // Función para obtener todas las notas de un alumno
const getStudentMarks = async (studentId) => {
    try {
      const student = await Student.findById(studentId).populate('marks');
      console.log('Notas del alumno:', student.marks);
    } catch (error) {
      console.error('Error al obtener las notas del alumno:', error);
    }
  };

//   getStudentMarks('65edf1c2187e76b0388e3044');


// Función para obtener todas las asignaturas de un alumno
const getStudentSubjects = async (studentId) => {
    try {
      const student = await Student.findById(studentId).populate('subjects');
      console.log('Asignaturas del alumno:', student.subjects);
    } catch (error) {
      console.error('Error al obtener las asignaturas del alumno:', error);
    }
  };

//   getStudentSubjects('65edf1c2187e76b0388e3044');


// Función para obtener todos los profesores de un alumno
const getStudentTeachers = async (studentId) => {
    try {
      const subjects = await Subject.find({ students: studentId }).populate('teachers');
      const teachers = subjects.map(subject => subject.teachers).flat();
      console.log('Profesores del alumno:', teachers);
    } catch (error) {
      console.error('Error al obtener los profesores del alumno:', error);
    }
  };

  getStudentTeachers('65edf1c2187e76b0388e3044');