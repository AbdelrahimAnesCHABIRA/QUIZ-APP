export type StudyYear = '1st Grade' | '2nd Grade' | '3rd Grade' | '4th Grade' | '5th Grade' | '6th Grade';

export interface Student {
  id: string;
  name: string;
  imageUrl: string;
  year: StudyYear;
  score: number;
  stats?: {
    attendance: number;
    assignments: number;
    participation: number;
  };
  history?: {
    date: string;
    activity: string;
    score: number;
  }[];
}

export interface StudentContextType {
  isSliderOpen: boolean;
  setSliderOpen: (open: boolean) => void;
  activeSection: 'statistics' | 'history' | 'account';
  setActiveSection: (section: 'statistics' | 'history' | 'account') => void;
  toggleSlider: () => void;
}