import React from 'react';
import { Brain, Target, BookOpen, Users, LineChart, Award } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Intelligent Career Guidance</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leverage AI-powered insights to make informed career decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain />}
            title="AI Analysis"
            description="Advanced algorithms analyze your skills, interests, and personality to suggest optimal career paths"
            className="transition-transform transform hover:scale-105"
          />
          <FeatureCard
            icon={<Target />}
            title="Personalized Matching"
            description="Get career recommendations tailored to your unique profile and aspirations"
          />
          <FeatureCard
            icon={<BookOpen />}
            title="Learning Paths"
            description="Access customized learning resources to help you achieve your career goals"
          />
          <FeatureCard
            icon={<Users />}
            title="Industry Insights"
            description="Stay updated with current job market trends and industry requirements"
          />
          <FeatureCard
            icon={<LineChart />}
            title="Growth Tracking"
            description="Monitor your progress and skill development over time"
          />
          <FeatureCard
            icon={<Award />}
            title="Success Planning"
            description="Get actionable steps to reach your career objectives"
          />
        </div>

        {/* New Section for Tailored PDF Reports */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Tailored PDF Reports</h2>
          <p className="text-gray-600 mb-2">
            Receive a comprehensive PDF report detailing your career matches, insights, and personalized recommendations.
          </p>
          <p className="text-gray-600">
            Our AI-driven approach ensures that you get the most relevant and accurate career guidance tailored to your unique profile.
          </p>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  className?: string;
}) => (
  <div className={`p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-colors bg-white hover:shadow-lg ${className}`}>
    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
      <div className="text-indigo-600">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);