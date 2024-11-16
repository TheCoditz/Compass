import React from 'react';
import { ArrowRight, Brain, Target, Sparkles } from 'lucide-react';

export default function Hero({ scrollToQuiz }: { scrollToQuiz: () => void; }) {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-100 mb-8">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-600">
              AI-Powered Career Guidance
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Find Your Dream Career with AI Precision
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover your perfect career path through our intelligent AI analysis. Get personalized recommendations based on your skills, interests, and goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToQuiz}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors w-full sm:w-auto"
            >
              <span>Start Career Quiz</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors border border-gray-200 w-full sm:w-auto">
              <span>Learn More</span>
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <Stat
              icon={<Brain className="h-6 w-6 text-indigo-600" />}
              number="98%"
              label="Career Match Accuracy"
            />
            <Stat
              icon={<Target className="h-6 w-6 text-indigo-600" />}
              number="50K+"
              label="Career Paths Analyzed"
            />
            <Stat
              icon={<Sparkles className="h-6 w-6 text-indigo-600" />}
              number="25K+"
              label="Success Stories"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Stat = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
    <div className="flex items-center justify-center space-x-4">
      {icon}
      <div className="text-left">
        <div className="text-2xl font-bold text-gray-900">{number}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  </div>
);