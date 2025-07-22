export interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Activity {
  id: number;
  type: string;
  title: string;
  description: string;
  score: { obtained: number; total: number };
  questions: Question[];
}

export interface Subject {
  id: number;
  name: string;
  title: string;
  colorTheme: string;
  subtitle: string;
  imageUrl: string;
  activities: Activity[];
}

export interface Student {
  id: number;
  name: string;
  email: string;
}

export interface Classroom {
  id: number;
  name: string;
  text: string;
  code: string;
  image: string;
  subject: Subject[];
  students: Student[];
}
