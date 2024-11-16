import React, { useEffect, useState } from 'react';
import { Brain, Briefcase, GraduationCap, TrendingUp, Download } from 'lucide-react';
import { CareerMatch } from './types';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

function analyzeAnswers(answers: Record<string, number | string>, additionalInfo: string): CareerMatch[] {
  // This is a simplified example. In a real application, you'd have a more sophisticated
  // algorithm to analyze the answers and generate career matches based on AI analysis
  const careerMatches: CareerMatch[] = [
    {
      title: 'Software Developer',
      match: 95,
      description: 'Design, develop, and maintain software applications and systems.',
      skills: ['Programming', 'Problem Solving', 'Analytical Thinking'],
      salary: '$70,000 - $150,000',
      education: ['Bachelor\'s in Computer Science', 'Coding Bootcamp'],
      outlook: 'Growing 22% faster than average',
      aiInsights: [
        'Your strong analytical skills and problem-solving abilities align perfectly with software development.',
        'Your preference for independent work and structured environments suggests you\'d thrive in this role.',
        'Consider focusing on full-stack development given your interest in both frontend and backend technologies.'
      ]
    },
    {
      title: 'Data Analyst',
      match: 88,
      description: 'Analyze complex data sets to support business decisions.',
      skills: ['Data Analysis', 'Statistics', 'SQL'],
      salary: '$60,000 - $120,000',
      education: ['Bachelor\'s in Statistics', 'Data Science Certification'],
      outlook: 'Growing 18% faster than average',
      aiInsights: [
        'Your methodical approach to problem-solving indicates strong potential in data analysis.',
        'Your interest in finding patterns and drawing conclusions from information is a key trait for this role.',
        'Consider pursuing additional certifications in data visualization tools.'
      ]
    },
    {
      title: 'UX Designer',
      match: 82,
      description: 'Design user-friendly interfaces for digital products.',
      skills: ['UI Design', 'User Research', 'Prototyping'],
      salary: '$65,000 - $130,000',
      education: ['Bachelor\'s in Design', 'UX Certification'],
      outlook: 'Growing 15% faster than average',
      aiInsights: [
        'Your creative problem-solving style and empathy for users are valuable UX design traits.',
        'Your interest in both technical and artistic aspects suggests you\'d excel in this hybrid role.',
        'Consider building a portfolio focusing on user-centered design projects.'
      ]
    },
    {
      title: 'Product Manager',
      match: 90,
      description: 'Oversee the development and marketing of products, ensuring they meet customer needs.',
      skills: ['Leadership', 'Strategic Thinking', 'Market Research'],
      salary: '$85,000 - $160,000',
      education: ['Bachelor\'s in Business', 'MBA'],
      outlook: 'Growing 15% faster than average',
      aiInsights: [
        'Your ability to think strategically and lead teams is perfectly suited for product management.',
        'Your interest in both business and tech suggests a strong fit for managing product lifecycle.',
        'Consider gaining hands-on experience in agile methodologies to strengthen your skill set.'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      match: 87,
      description: 'Protect an organization’s computer systems and networks from cyber threats.',
      skills: ['Network Security', 'Cryptography', 'Risk Assessment'],
      salary: '$75,000 - $140,000',
      education: ['Bachelor\'s in Cybersecurity', 'Cybersecurity Certification'],
      outlook: 'Growing 31% faster than average',
      aiInsights: [
        'Your attention to detail and problem-solving mindset align well with cybersecurity roles.',
        'Your analytical skills are crucial for identifying vulnerabilities and safeguarding systems.',
        'Consider specializing in cloud security as this area is seeing rapid growth.'
      ]
    },
    {
      title: 'Digital Marketing Specialist',
      match: 85,
      description: 'Develop and implement online marketing strategies to drive traffic and sales.',
      skills: ['SEO', 'Content Marketing', 'Data Analytics'],
      salary: '$50,000 - $120,000',
      education: ['Bachelor\'s in Marketing', 'Digital Marketing Certification'],
      outlook: 'Growing 10% faster than average',
      aiInsights: [
        'Your creative mindset and analytical approach make you well-suited for digital marketing.',
        'Your interest in data and optimization aligns well with SEO and performance marketing.',
        'Consider developing expertise in marketing automation tools to further enhance your skills.'
      ]
    },
    {
      title: 'Financial Analyst',
      match: 86,
      description: 'Analyze financial data to help businesses make informed financial decisions.',
      skills: ['Financial Modeling', 'Data Analysis', 'Problem Solving'],
      salary: '$60,000 - $110,000',
      education: ['Bachelor\'s in Finance', 'CFA Certification'],
      outlook: 'Growing 6% faster than average',
      aiInsights: [
        'Your strong analytical and problem-solving abilities align with the needs of financial analysts.',
        'Your interest in patterns and predictions makes you a great fit for financial forecasting.',
        'Consider pursuing advanced certifications in financial modeling or risk management.'
      ]
    },
    {
      title: 'Mechanical Engineer',
      match: 83,
      description: 'Design, analyze, and improve mechanical systems and devices.',
      skills: ['CAD Software', 'Problem Solving', 'Mathematics'],
      salary: '$60,000 - $120,000',
      education: ['Bachelor\'s in Mechanical Engineering'],
      outlook: 'Growing 4% faster than average',
      aiInsights: [
        'Your strong problem-solving skills and technical knowledge make mechanical engineering a great fit.',
        'Your interest in building and improving systems aligns with the work of mechanical engineers.',
        'Consider specializing in automation or robotics for a broader scope of projects.'
      ]
    },
    {
      "title": "Biomedical Engineer",
      "match": 88,
      "description": "Design and improve medical devices and healthcare equipment.",
      "skills": ["Problem Solving", "Mathematics", "Technical Design"],
      "salary": "$65,000 - $130,000",
      "education": ["Bachelor's in Biomedical Engineering"],
      "outlook": "Growing 7% faster than average",
      "aiInsights": [
        "Your interest in technology and healthcare makes biomedical engineering a strong fit.",
        "Focus on advanced imaging systems or prosthetics to specialize in cutting-edge fields.",
        "Consider gaining hands-on experience through internships or lab research projects."
      ]
    },
    {
      "title": "Supply Chain Manager",
      "match": 86,
      "description": "Oversee and optimize the flow of goods and materials in businesses.",
      "skills": ["Logistics", "Problem Solving", "Strategic Thinking"],
      "salary": "$70,000 - $140,000",
      "education": ["Bachelor's in Business Administration", "Logistics Certification"],
      "outlook": "Growing 10% faster than average",
      "aiInsights": [
        "Your strategic mindset and problem-solving skills are perfect for supply chain management.",
        "Consider specializing in automation technologies for efficiency improvements.",
        "Pursuing certifications in supply chain management will enhance your career prospects."
      ]
    },
    {
      "title": "Bioinformatics Specialist",
      "match": 84,
      "description": "Analyze biological data to advance research in genomics and healthcare.",
      "skills": ["Data Analysis", "Programming", "Biology"],
      "salary": "$60,000 - $120,000",
      "education": ["Bachelor's in Bioinformatics", "Genomics Certification"],
      "outlook": "Growing 22% faster than average",
      "aiInsights": [
        "Your analytical and technical skills align well with bioinformatics.",
        "Consider specializing in genome sequencing or personalized medicine.",
        "Learning bioinformatics tools like BLAST or Biopython can boost your expertise."
      ]
    },
    {
      "title": "Ethical Hacker",
      "match": 93,
      "description": "Identify and fix vulnerabilities in systems to prevent cyberattacks.",
      "skills": ["Penetration Testing", "Network Security", "Problem Solving"],
      "salary": "$80,000 - $140,000",
      "education": ["Bachelor's in Cybersecurity", "CEH Certification"],
      "outlook": "Growing 31% faster than average",
      "aiInsights": [
        "Your curiosity and problem-solving mindset make ethical hacking an ideal career.",
        "Focus on offensive security to gain expertise in penetration testing.",
        "Consider obtaining certifications like Certified Ethical Hacker (CEH) or OSCP."
      ]
    },
    {
      "title": "Environmental Scientist",
      "match": 83,
      "description": "Analyze and develop solutions to environmental problems.",
      "skills": ["Data Analysis", "Research", "Problem Solving"],
      "salary": "$50,000 - $100,000",
      "education": ["Bachelor's in Environmental Science"],
      "outlook": "Growing 8% faster than average",
      "aiInsights": [
        "Your analytical skills and interest in sustainability align with this role.",
        "Focus on renewable energy or conservation strategies to specialize in growing fields.",
        "Consider gaining expertise in geographic information systems (GIS) for advanced roles."
      ]
    },
    {
      "title": "Robotics Engineer",
      "match": 89,
      "description": "Design and develop robots for industrial and consumer applications.",
      "skills": ["Robotics", "Mechanical Design", "Programming"],
      "salary": "$70,000 - $140,000",
      "education": ["Bachelor's in Robotics", "Automation Certification"],
      "outlook": "Growing 25% faster than average",
      "aiInsights": [
        "Your technical problem-solving skills make you an excellent fit for robotics engineering.",
        "Specializing in autonomous systems will open up advanced career opportunities.",
        "Consider joining robotics competitions or projects to enhance your practical knowledge."
      ]
    },
    {
      "title": "Game Developer",
      "match": 85,
      "description": "Design and program engaging video games for various platforms.",
      "skills": ["Programming", "3D Modeling", "Game Engines"],
      "salary": "$50,000 - $120,000",
      "education": ["Bachelor's in Computer Science", "Game Development Course"],
      "outlook": "Growing 12% faster than average",
      "aiInsights": [
        "Your creativity and technical skills align with game development.",
        "Consider learning popular game engines like Unity or Unreal for industry relevance.",
        "Building a portfolio of indie games can showcase your skills to potential employers."
      ]
    },
    {
      "title": "Blockchain Developer",
      "match": 88,
      "description": "Develop decentralized applications and secure blockchain systems.",
      "skills": ["Blockchain", "Cryptography", "Smart Contracts"],
      "salary": "$80,000 - $150,000",
      "education": ["Bachelor's in Computer Science", "Blockchain Certification"],
      "outlook": "Growing 27% faster than average",
      "aiInsights": [
        "Your strong coding skills and interest in cryptography align with blockchain development.",
        "Focus on smart contract programming using Solidity to excel in this role.",
        "Consider contributing to open-source blockchain projects for real-world experience."
      ]
    },
    {
      "title": "Cloud Architect",
      "match": 91,
      "description": "Design and manage cloud computing systems for organizations.",
      "skills": ["Cloud Platforms", "Networking", "Problem Solving"],
      "salary": "$110,000 - $200,000",
      "education": ["Bachelor's in Computer Science", "AWS Certification"],
      "outlook": "Growing 30% faster than average",
      "aiInsights": [
        "Your strategic mindset and technical knowledge align well with cloud architecture roles.",
        "Specializing in multi-cloud environments will make you highly valuable in the field.",
        "Consider certifications like AWS Solutions Architect or Azure to boost your career."
      ]
    },
    {
      "title": "AI/ML Engineer",
      "match": 94,
      "description": "Design and develop artificial intelligence and machine learning models.",
      "skills": ["Machine Learning", "Python", "Data Analysis"],
      "salary": "$90,000 - $180,000",
      "education": ["Bachelor's in Computer Science", "AI Certification"],
      "outlook": "Growing 35% faster than average",
      "aiInsights": [
        "Your strong analytical skills and interest in innovation make AI/ML a perfect fit.",
        "Your logical approach to problem-solving aligns with developing predictive models.",
        "Consider gaining hands-on experience with TensorFlow or PyTorch to excel in this field."
      ]
    }                            
    
    
    
  ];

  // Shuffle the careerMatches array and select the first three
  const shuffledMatches = careerMatches.sort(() => 0.5 - Math.random());
  const selectedMatches = shuffledMatches.slice(0, 3);

  return selectedMatches;
}

function generatePDF(careerMatches: CareerMatch[], additionalInfo: string) {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;

  // Add header
  pdf.setFontSize(24);
  pdf.setTextColor(75, 85, 99);
  pdf.text('Career Compass AI Report', pageWidth / 2, 20, { align: 'center' });

  // Add date
  pdf.setFontSize(12);
  pdf.setTextColor(128, 128, 128);
  pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, 30, { align: 'center' });

  // Add introduction
  pdf.setFontSize(14);
  pdf.setTextColor(0, 0, 0);
  pdf.text('Based on your responses, we\'ve identified the following career matches:', 20, 45);

  let yPosition = 60;

  careerMatches.forEach((career, index) => {
    // Add new page if needed
    if (yPosition > 250) {
      pdf.addPage();
      yPosition = 20;
    }

    // Career title and match percentage
    pdf.setFontSize(16);
    pdf.setTextColor(79, 70, 229);
    pdf.text(`${index + 1}. ${career.title} - ${career.match}% Match`, 20, yPosition);
    yPosition += 10;

    // Description
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    const descriptionLines = pdf.splitTextToSize(career.description, pageWidth - 40);
    pdf.text(descriptionLines, 20, yPosition);
    yPosition += 10 * descriptionLines.length;

    // Skills
    pdf.setFontSize(12);
    pdf.setTextColor(75, 85, 99);
    pdf.text('Required Skills:', 20, yPosition);
    yPosition += 7;
    pdf.setTextColor(0, 0, 0);
    pdf.text(`• ${career.skills.join('\n• ')}`, 30, yPosition);
    yPosition += 7 * career.skills.length;

    // AI Insights
    pdf.setFontSize(12);
    pdf.setTextColor(75, 85, 99);
    pdf.text('AI-Powered Insights:', 20, yPosition);
    yPosition += 7;
    pdf.setTextColor(0, 0, 0);
    career.aiInsights.forEach(insight => {
      const insightLines = pdf.splitTextToSize(`• ${insight}`, pageWidth - 50);
      pdf.text(insightLines, 30, yPosition);
      yPosition += 7 * insightLines.length;
    });

    // Career details table
    autoTable(pdf, {
      startY: yPosition,
      head: [['Salary Range', 'Education', 'Job Outlook']],
      body: [[career.salary, career.education.join('\n'), career.outlook]],
      margin: { left: 20 },
      theme: 'striped',
      headStyles: { fillColor: [79, 70, 229] },
    });

    yPosition = (pdf as any).lastAutoTable.finalY + 20;
  });

  // Add additional information if provided
  if (additionalInfo.trim()) {
    pdf.addPage();
    pdf.setFontSize(16);
    pdf.setTextColor(79, 70, 229);
    pdf.text('Additional Information', 20, 20);
    
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    const additionalInfoLines = pdf.splitTextToSize(additionalInfo, pageWidth - 40);
    pdf.text(additionalInfoLines, 20, 35);
  }

  // Save the PDF
  pdf.save('career-compass-ai-report.pdf');
}

export default function QuizResults({ 
  answers, 
  additionalInfo 
}: { 
  answers: Record<string, number | string>;
  additionalInfo: string;
}) {
  const [careerMatches, setCareerMatches] = React.useState<CareerMatch[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [showResults, setShowResults] = useState(false);

  React.useEffect(() => {
    // Simulate a delay before showing results
    const timer = setTimeout(() => {
      setCareerMatches(analyzeAnswers(answers, additionalInfo));
      setLoading(false);
      setShowResults(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-3xl font-bold text-indigo-600">Analyzing your response...</h2>
      </div>
    );
  }

  if (showResults) {
    // Shuffle the career matches array
    const shuffledCareerMatches = [...careerMatches].sort(() => 0.5 - Math.random());
    // Select the first three matches for display
    const displayedMatches = shuffledCareerMatches.slice(0, 3);

    const handleNext = () => {
      // Check if all questions are answered
      const allAnswered = questions.every(question => question.answer !== undefined);
      
      if (!allAnswered) {
        alert("Please answer all questions before proceeding.");
        return;
      }

      // Proceed to the next step
      // ... existing code for moving to the next step ...
    }

    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Career Matches</h2>
          <p className="text-gray-600 mb-6">
            Based on your responses, here are three careers that best match your profile
          </p>
          <button
            onClick={() => generatePDF(careerMatches, additionalInfo)}
            className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-5 w-5" />
            <span>Download Detailed Report (PDF)</span>
          </button>
        </div>

        <div className="space-y-6">
          {displayedMatches.map((career) => (
            <div
              key={career.title}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{career.title}</h3>
                  <p className="text-gray-600">{career.description}</p>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                  <Brain className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-medium">{career.match}% Match</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-indigo-600" />
                  <div>
                    <div className="text-sm font-medium">Required Skills</div>
                    <div className="text-gray-600">{career.skills.join(', ')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="h-5 w-5 text-indigo-600" />
                  <div>
                    <div className="text-sm font-medium">Salary Range</div>
                    <div className="text-gray-600">{career.salary}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-indigo-600" />
                  <div>
                    <div className="text-sm font-medium">Education Path</div>
                    <div className="text-gray-600">{career.education.join(' or ')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  <div>
                    <div className="text-sm font-medium">Job Outlook</div>
                    <div className="text-gray-600">{career.outlook}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-indigo-600" />
                  <span>AI-Powered Insights</span>
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {career.aiInsights.map((insight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="block mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => window.location.reload()} 
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return null; // Fallback
}