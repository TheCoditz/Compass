import { QuizQuestion } from './types';

export const careerQuestions: QuizQuestion[] = [
  {
    id: 'activities',
    type: 'choice',
    question: 'What type of activities do you enjoy most?',
    options: [
      'Problem-solving and puzzles',
      'Creative design and art',
      'Helping others and socializing',
      'Researching and analyzing data'
    ],
    category: 'interests'
  },
  {
    id: 'work_style',
    type: 'choice',
    question: 'How do you prefer to work?',
    options: [
      'Independently with minimal guidance',
      'As part of a collaborative team',
      'With clear instructions and structure',
      'In a leadership or managerial role'
    ],
    category: 'personality'
  },
  {
    id: 'risk_taking',
    type: 'choice',
    question: 'How do you feel about taking risks?',
    options: [
      "I'm cautious and prefer to avoid risks",
      "I'm open to risks, but only calculated ones",
      'I enjoy the thrill of taking risks',
      'I like to take risks when I have enough information'
    ],
    category: 'personality'
  },
  {
    id: 'work_environment',
    type: 'choice',
    question: 'Which of the following best describes your ideal work environment?',
    options: [
      'Fast-paced and ever-changing',
      'Structured and organized',
      'Creative and flexible',
      'Calm and quiet with minimal distractions'
    ],
    category: 'environment'
  },
  {
    id: 'passion',
    type: 'choice',
    question: 'What are you passionate about?',
    options: [
      'Technology and innovation',
      'Arts and creative expression',
      'Social impact and helping others',
      'Scientific research and discovery'
    ],
    category: 'interests'
  },
  {
    id: 'free_time',
    type: 'choice',
    question: 'How do you prefer to spend your free time?',
    options: [
      'Playing video games or exploring new tech',
      'Painting, designing, or doing crafts',
      'Volunteering or socializing',
      'Reading, experimenting, or learning new things'
    ],
    category: 'interests'
  },
  {
    id: 'leadership',
    type: 'choice',
    question: 'Do you like to lead or manage projects?',
    options: [
      'Yes, I enjoy taking charge',
      'Not particularly, but I can if needed',
      'I prefer to follow instructions and focus on my tasks',
      "I'm flexible with either leadership or following roles"
    ],
    category: 'personality'
  },
  {
    id: 'communication',
    type: 'choice',
    question: 'How would you describe your communication style?',
    options: [
      'Logical and straightforward',
      'Creative and expressive',
      'Empathetic and understanding',
      'Analytical and data-driven'
    ],
    category: 'skills'
  },
  {
    id: 'subject',
    type: 'choice',
    question: 'Which subject do you enjoy the most?',
    options: [
      'Math and technology',
      'Literature and arts',
      'Social studies and psychology',
      'Science and biology'
    ],
    category: 'interests'
  },
  {
    id: 'problem_solving',
    type: 'choice',
    question: 'How do you approach problem-solving?',
    options: [
      'By breaking it down into smaller parts and analyzing each step',
      'By brainstorming creative solutions and thinking outside the box',
      'By asking others for their opinions and collaborating',
      'By looking at it from different perspectives and gathering data'
    ],
    category: 'skills'
  },
  {
    id: 'career_preference',
    type: 'choice',
    question: 'Would you prefer a career where you can:',
    options: [
      'Work with technology and create new software or hardware',
      'Create art, music, or something visually appealing',
      'Help people and make a social impact',
      'Conduct experiments and advance scientific knowledge'
    ],
    category: 'interests'
  },
  {
    id: 'public_speaking',
    type: 'scale',
    question: 'How comfortable are you with public speaking?',
    category: 'skills'
  },
  {
    id: 'motivation',
    type: 'choice',
    question: 'What motivates you most in a career?',
    options: [
      'Financial success and stability',
      'Creativity and personal expression',
      'Helping others and making a difference',
      'Intellectual challenge and learning'
    ],
    category: 'values'
  },
  {
    id: 'tech_comfort',
    type: 'scale',
    question: 'How comfortable are you working with technology?',
    category: 'skills'
  },
  {
    id: 'work_preference',
    type: 'choice',
    question: 'Would you rather:',
    options: [
      'Solve complex problems using math and logic',
      'Express ideas through creative mediums',
      'Collaborate with others to make a social impact',
      'Experiment and research to discover new knowledge'
    ],
    category: 'interests'
  },
  {
    id: 'challenge_approach',
    type: 'choice',
    question: 'How do you approach challenges at work?',
    options: [
      'I like to think critically and solve them myself',
      'I like to approach challenges creatively and out-of-the-box',
      'I prefer to work with others to solve problems together',
      'I gather all the facts and research the problem thoroughly'
    ],
    category: 'personality'
  },
  {
    id: 'learning_style',
    type: 'choice',
    question: 'How do you prefer to learn new skills?',
    options: [
      'By experimenting and figuring things out on my own',
      'Through hands-on practice and doing',
      'By collaborating with others and learning from experience',
      'Through structured courses or detailed instructions'
    ],
    category: 'personality'
  },
  {
    id: 'stress_handling',
    type: 'choice',
    question: 'How do you handle stress at work?',
    options: [
      'I stay calm and focus on the task at hand',
      'I find creative ways to de-stress and relax',
      'I talk things out with others to relieve stress',
      'I dive into research and data to find a solution'
    ],
    category: 'personality'
  },
  {
    id: 'legacy',
    type: 'choice',
    question: 'What kind of legacy would you like to leave?',
    options: [
      'Innovation in technology',
      'Artistic contributions to culture',
      'Positive impact on society',
      'Scientific advancements and discoveries'
    ],
    category: 'values'
  },
  {
    id: 'career_importance',
    type: 'choice',
    question: 'Which of the following is more important to you in a career?',
    options: [
      'High earning potential and career advancement',
      'Creative freedom and expression',
      'Making a meaningful difference in people\'s lives',
      'Intellectual stimulation and constant learning'
    ],
    category: 'values'
  }
];