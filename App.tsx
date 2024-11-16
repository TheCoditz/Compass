import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { QuizProvider } from './components/Quiz/QuizContext';
import QuizComponent from './components/Quiz/QuizComponent';

function App() {
  const quizRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToQuiz={() => quizRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Hero scrollToQuiz={() => quizRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Features />
      <section id="quiz" ref={quizRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Find Your Perfect Career</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take our comprehensive career assessment to discover your ideal career path
            </p>
          </div>
          <QuizProvider>
            <QuizComponent />
          </QuizProvider>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;