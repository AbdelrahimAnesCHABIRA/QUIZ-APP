import { Subject } from '../models/Subject.js';

export const getSubjectsByLevel = async (req, res) => {
  try {
    const subjects = await Subject.find({ studyLevel: req.params.studyLevel });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const createSubject = async (req, res) => {
//   try {
//     const subject = new Subject(req.body);
//     const savedSubject = await subject.save();
//     res.status(201).json(savedSubject);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const getAllSubjects = async (req, res) => {
//   try {
//     const subjects = await Subject.find();
//     res.json(subjects);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };