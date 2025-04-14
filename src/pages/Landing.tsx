
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Award, Users, Star, CheckCircle, Clock, ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';
import FaqAccordion from '@/components/FaqAccordion';
import HeroForm from '@/components/HeroForm';
import PackageCard from '@/components/PackageCard';
import BlogCard from '@/components/BlogCard';

const Landing: React.FC = () => {
  const services = [
    {
      title: 'Professional CV Writers',
      description: 'We have a team of experts CV writers who carry functional area knowledge in your domain.',
      icon: <FileText size={30} />,
      link: '/services/resume'
    },
    {
      title: 'On-time Delivery',
      description: 'We ensure 100% on-time delivery of our resume writing service within the agreed time.',
      icon: <Clock size={30} />,
      link: '/services/cover-letter'
    },
    {
      title: 'Direct contact with writer',
      description: 'We ensure that you can connect with the resume writer for an in-depth profile discussion.',
      icon: <Users size={30} />,
      link: '/services/linkedin'
    }
  ];

  const testimonials = [
    {
      name: 'Sonali Kaur',
      role: 'Sales Manager, Resume Writing',
      content: 'I am writing to express my sincere gratitude to ResumeOcean services. They have been excellent throughout the resume making process. They have exceptional communication skills – always ensuring I am fully informed with the latest updates. Thank you for successfully making my great resume to get an exciting new opportunity.',
      rating: 5
    },
    {
      name: 'Aakash Soni',
      role: 'Web Developer, Resume Writing',
      content: 'ResumeOcean consultants are very professional and understand the right approach for you and keep you updated on the outcome. I was successful in making the resume with them, as I really wanted to get a professional resume of mine. Thank you!',
      rating: 5
    }
  ];

  const packages = [
    {
      title: "FRESHER RESUME",
      subtitle: "(Exp: 0 to 1 year)",
      price: "99",
      features: [
        "1 Resume/CV",
        "Delivery in word/pdf format",
        "High ranking keywords enabled",
        "1-2 Working days delivery"
      ],
      ctaLink: "/order/fresher"
    },
    {
      title: "ENTRY LEVEL",
      subtitle: "(Exp: 1 to 3 years)",
      price: "149",
      features: [
        "1 Resume/CV",
        "Delivery in word/pdf format",
        "High ranking keywords enabled",
        "1-2 Working days delivery"
      ],
      ctaLink: "/order/entry-level",
      isPopular: true
    },
    {
      title: "MID LEVEL",
      subtitle: "(Exp: 3 to 7 years)",
      price: "199",
      features: [
        "1 Resume/CV",
        "Delivery in word/pdf format",
        "High ranking keywords enabled",
        "1-2 Working days delivery"
      ],
      ctaLink: "/order/mid-level"
    }
  ];

  const seniorPackages = [
    {
      title: "SENIOR LEVEL",
      subtitle: "(Exp: 7 to 10 years)",
      price: "249",
      features: [
        "1 Resume/CV",
        "Delivery in word/pdf format",
        "High ranking keywords enabled",
        "1-2 Working days delivery"
      ],
      ctaLink: "/order/senior-level"
    },
    {
      title: "EXECUTIVE LEVEL",
      subtitle: "(Exp: 10 to 15 years)",
      price: "349",
      features: [
        "1 Resume/CV",
        "Delivery in word/pdf format",
        "High ranking keywords enabled",
        "1-2 Working days delivery"
      ],
      ctaLink: "/order/executive-level"
    },
    {
      title: "COVER LETTER",
      subtitle: "Along With Resume",
      price: "99",
      priceNote: "*",
      features: [
        "1 Cover Letter",
        "Delivery in word/pdf format",
        "High ranking keywords enabled",
        "1-2 Working days delivery"
      ],
      ctaLink: "/order/cover-letter"
    }
  ];

  const blogPosts = [
    {
      title: "How To Impress Recruiters Through Your Resume?",
      image: "/public/lovable-uploads/10f182ec-10f8-49ad-8c4e-80340e075314.png",
      date: "December 18, 2022",
      link: "/blog/impress-recruiters"
    },
    {
      title: "How to Optimize Your Resume for an ATS?",
      image: "/public/lovable-uploads/85174e16-5a5d-4c98-8290-f8f4013643c9.png",
      date: "December 14, 2022",
      link: "/blog/ats-optimization"
    },
    {
      title: "What Recruiters Don't Want to See on Your Resume?",
      image: "/public/lovable-uploads/ed202f4a-50fd-4ac7-95f8-fdc275a29114.png",
      date: "December 10, 2022",
      link: "/blog/recruiter-tips"
    },
    {
      title: "9 Secret Techniques To Improve Your Resume",
      image: "/public/lovable-uploads/1ec9e98f-a065-4ed0-bf3a-6cec894990c8.png",
      date: "February 28, 2022",
      link: "/blog/improve-techniques"
    }
  ];

  const faqs = [
    {
      question: 'How does the resume writing process work?',
      answer: 'Our process is simple: First, you\'ll select a package and complete a detailed questionnaire about your experience. Then, our expert writers craft your resume within 1-2 business days. You\'ll receive a draft for review and can request revisions if needed.'
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
      answer: 'You\'ll receive your first draft within 1-2 business days after completing the questionnaire. Rush delivery options are available for an additional fee.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Form */}
      <section className="relative bg-cover bg-center py-16 px-6" style={{ backgroundImage: 'url(/public/lovable-uploads/9a81b6aa-7cd5-48d8-a6c9-7affc1e2f36d.png)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-secondary">#1</span> Professional CV Writing
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                To Impress Recruiters
              </h2>
              <div className="w-16 h-1 bg-secondary mb-6"></div>
              <p className="text-lg mb-6">
                We showcase your skills with highly searched keywords to make 
                you appear at the top in front of HR. <span className="text-secondary font-bold">99% Success Rate.</span>
              </p>
              <p className="text-lg text-secondary">
                Affordable resume writing service.
              </p>
            </div>
            <div className="lg:w-5/12">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Resume Writing Service Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Resume Writing Service</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 leading-relaxed">
              A resume plays an important role in the job application process and has the potential to make a positive impression on the prospective employer. It summarizes the job seeker's required experience and qualifications for a job thus clarifying the significance of how well organized a resume must be to hit the desired job.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              However, having a well-tailored resume becomes more essential nowadays with respect to the fact that online job postings routinely attract hundreds and no doubt thousands of applications. A highly skilled individual might not be able to express himself while preparing for their resume as professionally as it is expected, but at Resume Ocean our <span className="font-semibold">professional resume writers</span> work effectively to highlight one's personal skills into professional standards to enhance the overall value and efficiency of the resume.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Not only this, but the <span className="font-semibold">resume writing service</span> keep in mind to provide the job seekers with excellent resumes to make a difference with others resume and hence to take their careers to the next level of growth.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team help you to create an outstanding resume that would be noticed by a recruiter it is presented too. It is obvious that a recruiter does not give much time to look at each and every resume and utilizes a few seconds only for the analysis. Therefore, our <span className="font-semibold">professional resume writer services</span> make sure to include the most required and relevant information to give every job seeker the best possible chance of resume getting selected.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We have a team of highly experienced <span className="font-semibold">professional resume writers</span> who make your resume the great one among all the good ones. We are also available with our experts to check and correct your already-existing resume and upgrade its quality. So, we are always there for you to create, improve, edit and correct your resume to make sure that you are presented in the best possible way and get you the ideal job.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why choose us?</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Packages</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are always there for you to create, improve, edit and correct your resume to make sure that you are presented in the best possible way and get you the ideal job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                title={pkg.title}
                subtitle={pkg.subtitle}
                price={pkg.price}
                features={pkg.features}
                ctaLink={pkg.ctaLink}
                isPopular={pkg.isPopular}
              />
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {seniorPackages.map((pkg, index) => (
              <PackageCard
                key={index}
                title={pkg.title}
                subtitle={pkg.subtitle}
                price={pkg.price}
                priceNote={pkg.priceNote}
                features={pkg.features}
                ctaLink={pkg.ctaLink}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Best Resume Writing Services</h2>
            <p className="text-xl text-gray-600">Hear What Our Clients Have To Say</p>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
      
      {/* Blog Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Resume Writing Tips</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                image={post.image}
                date={post.date}
                link={post.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a job-winning professional resume from our experts.</h2>
          <p className="text-xl mb-10">
            Click on the yellow button below and our experts will contact you.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-white text-lg px-10 py-6">
            GET WRITER CALL
          </Button>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-8 px-6 bg-secondary">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-xl font-bold text-primary mb-4 md:mb-0">Our writing experts will prepare a perfect resume for you</h3>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Connect With Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
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
