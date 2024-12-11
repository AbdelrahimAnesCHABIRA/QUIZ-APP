import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  studyLevel: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }
});

export const Subject = mongoose.model('Subject', subjectSchema);