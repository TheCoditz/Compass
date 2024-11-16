import React, { createContext, useContext, useReducer } from 'react';
import { QuizQuestion, QuizState, QuizAction } from './types';
import { careerQuestions } from './questions';

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: {},
  isComplete: false,
  additionalInfo: '',
};

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
  currentQuestion: QuizQuestion | undefined;
} | null>(null);

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.answer,
        },
      };
    case 'NEXT_QUESTION':
      const nextIndex = state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        isComplete: nextIndex >= careerQuestions.length,
      };
    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
        isComplete: false,
      };
    case 'SET_ADDITIONAL_INFO':
      return {
        ...state,
        additionalInfo: action.info,
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const currentQuestion = careerQuestions[state.currentQuestionIndex];

  return (
    <QuizContext.Provider value={{ state, dispatch, currentQuestion }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}