import express from 'express';
import { getSubjectsByLevel} from '../controllers/subjectController.js';

const router = express.Router();

// router.get('/subjects', getAllSubjects);
router.get('/subjects/:studyLevel', getSubjectsByLevel);
// router.post('/subjects', createSubject);

export default router;