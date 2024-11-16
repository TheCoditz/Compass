import React from 'react';
import { useQuiz } from './QuizContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import QuizResults from './QuizResults';
import { careerQuestions } from './questions';

export default function QuizComponent() {
  const { state, dispatch, currentQuestion } = useQuiz();

  if (state.isComplete) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        {/* Removed Additional Information section */}
        {/* <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
          <textarea
            className="w-full p-3 border border-gray-200 rounded-lg"
            rows={4}
            placeholder="Tell us more about your career goals, experience, or any specific preferences..."
            value={state.additionalInfo}
            onChange={(e) => dispatch({ type: 'SET_ADDITIONAL_INFO', info: e.target.value })}
          />
        </div> */}
        <QuizResults answers={state.answers} additionalInfo={state.additionalInfo} />
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <p className="text-gray-600">Loading quiz questions...</p>
      </div>
    );
  }

  const progress = ((state.currentQuestionIndex + 1) / careerQuestions.length) * 100;

  const handleAnswer = (answer: number | string) => {
    dispatch({ 
      type: 'ANSWER_QUESTION', 
      questionId: currentQuestion.id, 
      answer 
    });
  };

  const handleNext = () => {
    if (state.answers[currentQuestion.id] === undefined) {
      alert("Please answer the current question before proceeding.");
      return;
    }
    
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'scale':
        return (
          <div className="space-y-4">
            <input
              type="range"
              min="1"
              max="5"
              value={state.answers[currentQuestion.id] || 3}
              onChange={(e) => handleAnswer(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Not at all</span>
              <span>Very much</span>
            </div>
          </div>
        );
      case 'choice':
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full p-3 text-left rounded-lg border ${
                  state.answers[currentQuestion.id] === option
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div
            className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Question {state.currentQuestionIndex + 1} of {careerQuestions.length}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">{currentQuestion.question}</h3>
        {renderQuestion()}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => dispatch({ type: 'PREVIOUS_QUESTION' })}
          disabled={state.currentQuestionIndex === 0}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>
        <button
          onClick={handleNext}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-lg"
        >
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}