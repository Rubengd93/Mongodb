const mongoose= require('mongoose');

const urlRemote = 'mongodb+srv://rubengd93:921whT5VRJuPpd1k@cluster0.edkbpm9.mongodb.net/Codenotch4'

mongoose.connect('mongodb+srv://rubengd93:921whT5VRJuPpd1k@cluster0.edkbpm9.mongodb.net/Codenotch4')


// Esquema para 'teachers'
const teacherSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  }]
});


// Esquema para 'subjects'
const subjectSchema = new mongoose.Schema({
  title: String,
  teachers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  }],
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }]
});


// Esquema para 'students'
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  marks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mark'
  }],
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  }]
});


// Esquema para 'marks'
const markSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
  mark: Number,
  date: Date
});

// Exportar modelos
module.exports = {
  Teacher: mongoose.model('Teacher', teacherSchema),
  Subject: mongoose.model('Subject', subjectSchema),
  Student: mongoose.model('Student', studentSchema),
  Mark: mongoose.model('Mark', markSchema)
};

