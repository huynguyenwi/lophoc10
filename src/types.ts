export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  title: string;
  theory: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export type SubjectId = 'math' | 'vietnamese' | 'science' | 'history-geo';
