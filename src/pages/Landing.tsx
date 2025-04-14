
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Award, Users, Star, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';
import FaqAccordion from '@/components/FaqAccordion';

const Landing: React.FC = () => {
  const services = [
    {
      title: 'Professional Resume',
      description: 'ATS-friendly resumes crafted by expert writers with industry experience to highlight your strengths.',
      icon: <FileText size={30} />,
      link: '/services/resume'
    },
    {
      title: 'Cover Letter',
      description: 'Personalized cover letters that complement your resume and showcase your passion for the role.',
      icon: <Award size={30} />,
      link: '/services/cover-letter'
    },
    {
      title: 'LinkedIn Profile',
      description: 'Optimize your LinkedIn profile to attract recruiters and showcase your professional brand.',
      icon: <Users size={30} />,
      link: '/services/linkedin'
    },
    {
      title: 'Career Coaching',
      description: 'One-on-one sessions with career experts to prepare for interviews and navigate your job search.',
      icon: <Star size={30} />,
      link: '/services/coaching'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Software Developer',
      content: 'The resume I received was exceptional. I started getting interview calls within a week of using it. The investment was worth every penny!',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Manager',
      content: 'I was struggling with my job search for months. After getting my resume professionally written, I landed my dream job within 3 weeks!',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      role: 'Financial Analyst',
      content: 'The quality of my resume improved dramatically. The writer captured my experience perfectly and highlighted achievements I hadn\'t considered.',
      rating: 4
    }
  ];

  const faqs = [
    {
      question: 'How does the resume writing process work?',
      answer: 'Our process is simple: First, you\'ll select a package and complete a detailed questionnaire about your experience. Then, our expert writers craft your resume within 3-5 business days. You\'ll receive a draft for review and can request revisions if needed.'
    },
    {
      question: 'How many revisions am I entitled to?',
      answer: 'All our packages include 2 rounds of revisions within 7 days of receiving your first draft. Additional revisions may be available at a nominal fee.'
    },
    {
      question: 'Are your resumes ATS-friendly?',
      answer: 'Absolutely! All our resumes are optimized to pass through Applicant Tracking Systems with carefully selected keywords relevant to your industry and target roles.'
    },
    {
      question: 'What if I\'m not satisfied with my resume?',
      answer: 'Your satisfaction is our priority. If you\'re not happy with your resume after the revision rounds, we offer a 100% money-back guarantee within 30 days of purchase.'
    },
    {
      question: 'How long will it take to receive my resume?',
      answer: 'You\'ll receive your first draft within 3-5 business days after completing the questionnaire. Rush delivery options are available for an additional fee.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-bg wave-bg pt-20 pb-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary animate-fade-in">
                Your Resume. Your Dream Job...
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Create Professional Resumes in <span className="text-secondary">Minutes</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Transform your career with our AI-powered resume builder. Say goodbye to outdated templates and manual formatting. Craft a stunning, professional resume that showcases your achievements and stands out in the job market.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Link to="/services">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary-light text-lg px-8 py-6">
                    Build Your Resume Now
                  </Button>
                </Link>
                <Link to="/templates">
                  <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6">
                    Explore Templates
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-800">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 10,000+ customers</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
              <img src="/public/lovable-uploads/78816054-defb-4e7a-b42e-bb9e5516a99e.png" alt="Resume Template" className="rounded-lg shadow-xl mx-auto" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Resume Service?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a template. Our professionally crafted resumes help you stand out from the competition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">ATS-Friendly Resumes</h3>
              <p className="text-gray-600">
                Our resumes are designed to pass through Applicant Tracking Systems with flying colors, ensuring your application reaches human recruiters.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expert Writers</h3>
              <p className="text-gray-600">
                Our team consists of experienced resume writers with backgrounds in HR and recruitment across various industries.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Turnaround</h3>
              <p className="text-gray-600">
                Receive your professionally written resume within 3-5 business days, with expedited options available for urgent job applications.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Keyword Optimization</h3>
              <p className="text-gray-600">
                We strategically incorporate relevant keywords tailored to your target positions, increasing your chances of getting noticed.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Designs</h3>
              <p className="text-gray-600">
                Choose from a variety of professional templates designed to match your industry and career level for maximum impact.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Star size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We offer unlimited revisions until you're completely satisfied with your resume, backed by our 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive career solutions tailored to help you land your dream job faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-primary hover:bg-primary-light">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what our customers have achieved with our resumes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of professionals who have accelerated their job search with our expert resume writing services.
          </p>
          <Link to="/packages">
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our resume writing services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Landing;
