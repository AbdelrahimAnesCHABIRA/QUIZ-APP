import axios from 'axios';
import { Subject } from '../types/subject';


const API_URL = 'http://localhost:5000/api';

export const getSubjectsByLevel = async (studyLevel: string): Promise<Subject[]> => {
  console.log(studyLevel);
  try {
    const response = await axios.get(`${API_URL}/subjects/${studyLevel}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error;
  }
};