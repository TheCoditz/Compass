export interface QuizQuestion {
  id: string;
  type: 'scale' | 'choice' | 'multiChoice';
  question: string;
  options?: string[];
  category: 'interests' | 'skills' | 'personality' | 'values' | 'environment';
}

export interface CareerMatch {
  title: string;
  match: number;
  description: string;
  skills: string[];
  salary: string;
  education: string[];
  outlook: string;
  aiInsights: string[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, number | string>;
  isComplete: boolean;
  additionalInfo: string;
}

export type QuizAction =
  | { type: 'ANSWER_QUESTION'; questionId: string; answer: number | string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'SET_ADDITIONAL_INFO'; info: string }
  | { type: 'RESET_QUIZ' };