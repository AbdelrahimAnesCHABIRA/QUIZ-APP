export interface Subject {
    _id: string;
    subjectName: string;
    studyLevel: string;
    description: string;
    icon: string;
  }
  
  export type StudyLevel = '1st Grade' | '2nd Grade' | '3rd Grade' | '4th Grade' | '5th Grade' | '6th Grade';