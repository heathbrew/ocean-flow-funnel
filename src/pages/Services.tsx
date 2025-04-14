
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Award, Users, Star, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Professional Resume Writing',
      description: 'Our expert writers create tailored, ATS-friendly resumes that highlight your skills and achievements to help you land interviews. Each resume is customized to your industry and career level.',
      features: [
        'ATS-optimized formatting',
        'Industry-specific keyword optimization',
        'Achievement-focused content',
        'Custom design and layout',
        'Multiple file formats (PDF, Word, TXT)',
      ],
      icon: <FileText size={50} />,
      cta: 'Order Resume Services',
      link: '/packages'
    },
    {
      title: 'Cover Letter Writing',
      description: 'Make a strong first impression with a professionally written cover letter that complements your resume and showcases your passion for the role and company.',
      features: [
        'Personalized to specific job positions',
        'Compelling introduction and call-to-action',
        'Highlights of relevant skills and achievements',
        'Professional tone and formatting',
        'Matching design to your resume',
      ],
      icon: <Award size={50} />,
      cta: 'Order Cover Letter',
      link: '/packages'
    },
    {
      title: 'LinkedIn Profile Optimization',
      description: 'Transform your LinkedIn profile into a powerful networking tool that attracts recruiters and showcases your professional brand.',
      features: [
        'SEO-optimized headline and summary',
        'Keyword-rich experience descriptions',
        'Skills section optimization',
        'Recommendations for profile photo and background',
        'Network growth strategy',
      ],
      icon: <Users size={50} />,
      cta: 'Optimize Your LinkedIn',
      link: '/packages'
    },
    {
      title: 'Career Coaching',
      description: 'Get personalized guidance from career experts to prepare for interviews, negotiate offers, and navigate your job search effectively.',
      features: [
        'Interview preparation and practice',
        'Salary negotiation strategies',
        'Career path planning',
        'Job search strategy development',
        'Personal branding consultation',
      ],
      icon: <Star size={50} />,
      cta: 'Book a Coaching Session',
      link: '/packages'
    }
  ];

  const faqs = [
    {
      question: "What makes your resume writing service different?",
      answer: "Our resume writing service stands out because we combine industry expertise with personalized attention. Each resume is written by professionals with experience in recruitment and hiring across various sectors. We focus on highlighting your unique value proposition, optimizing for ATS systems, and crafting achievement-focused content that gets results."
    },
    {
      question: "How does the resume writing process work?",
      answer: "Our process is simple and collaborative. First, you'll select a package and complete a detailed questionnaire about your experience and career goals. Next, you'll be matched with a writer specialized in your industry who will craft your resume. You'll receive your first draft within 3-5 business days, and you can request revisions until you're completely satisfied with the final product."
    },
    {
      question: "Will my resume pass through Applicant Tracking Systems (ATS)?",
      answer: "Yes, all our resumes are specifically designed to pass through ATS filters. We use industry-standard formatting, incorporate relevant keywords based on your target positions, and ensure proper section headings and structure to maximize your resume's compatibility with these systems."
    },
    {
      question: "How many revisions can I request?",
      answer: "The number of revision rounds depends on your package. Our Entry Level package includes 1 revision round, Professional includes 2 revision rounds, while our Executive and Premium packages include unlimited revisions until you're completely satisfied."
    },
    {
      question: "What information do I need to provide for my resume?",
      answer: "You'll need to complete our comprehensive questionnaire that covers your work experience, education, skills, achievements, and career goals. The more detailed information you provide, the better we can customize your resume. You can also share your current resume and target job listings to help us understand your background and objectives."
    },
    {
      question: "How quickly will I receive my resume?",
      answer: "Standard delivery time is 3-5 business days for your first draft. If you need your resume urgently, our Executive package includes 48-hour delivery, and our Premium package offers 24-hour turnaround. Rush services are also available for an additional fee."
    },
    {
      question: "Can you help me with specific industry resumes?",
      answer: "Absolutely! Our team includes writers with expertise across various industries including IT, finance, healthcare, engineering, marketing, sales, education, government, and more. We'll match you with a writer who understands the specific requirements and terminology of your industry."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-bg wave-bg pt-20 pb-32 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Professional Resume Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Expert-crafted career documents designed to help you stand out in a competitive job market and land your dream role.
          </p>
          <Link to="/packages">
            <Button className="bg-primary hover:bg-primary-light text-lg px-8 py-6">
              View Our Packages
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Services Detail Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
              >
                <div className="lg:w-1/3 flex justify-center">
                  <div className={`w-48 h-48 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                    <div className={index % 2 === 0 ? 'text-primary' : 'text-secondary'}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.link}>
                    <Button className={index % 2 === 0 ? 'bg-primary hover:bg-primary-light' : 'bg-secondary hover:bg-secondary/90'}>
                      {service.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed a streamlined process to create your professional resume in just a few simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3 pt-4">Choose Your Package</h3>
              <p className="text-gray-600">
                Select the service that best fits your career needs and goals from our range of packages.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3 pt-4">Complete Questionnaire</h3>
              <p className="text-gray-600">
                Provide details about your experience, skills, and career goals through our comprehensive questionnaire.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3 pt-4">Expert Writing</h3>
              <p className="text-gray-600">
                Our professional writers craft your documents, optimizing them for your industry and target positions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-3 pt-4">Review & Finalize</h3>
              <p className="text-gray-600">
                Receive your documents for review and request any revisions until you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our resume writing services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section with Statistics */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Clients Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional resume writing services have helped thousands of job seekers advance their careers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction Rate</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <p className="text-gray-600">Interview Success Rate</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-gray-600">Resumes Delivered</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/packages">
              <Button className="bg-primary hover:bg-primary-light px-8 py-3">
                Browse Our Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Take the first step toward your dream job with our professional resume writing services.
          </p>
          <Link to="/packages">
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              View Packages & Pricing
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
