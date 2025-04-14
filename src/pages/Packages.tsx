
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Award, Users, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';

const Packages: React.FC = () => {
  const packages = [
    {
      title: "Entry Level",
      price: 99,
      isPopular: false,
      features: [
        { text: "Professional Resume", included: true },
        { text: "ATS-Friendly Format", included: true },
        { text: "1 Revision Round", included: true },
        { text: "Cover Letter", included: false },
        { text: "LinkedIn Profile Optimization", included: false },
        { text: "48-Hour Delivery", included: false },
        { text: "Career Coaching Session", included: false },
      ],
      ctaLink: "/order/entry-level"
    },
    {
      title: "Professional",
      price: 149,
      isPopular: true,
      features: [
        { text: "Professional Resume", included: true },
        { text: "ATS-Friendly Format", included: true },
        { text: "2 Revision Rounds", included: true },
        { text: "Cover Letter", included: true },
        { text: "LinkedIn Profile Optimization", included: false },
        { text: "48-Hour Delivery", included: false },
        { text: "Career Coaching Session", included: false },
      ],
      ctaLink: "/order/professional"
    },
    {
      title: "Executive",
      price: 249,
      isPopular: false,
      features: [
        { text: "Professional Resume", included: true },
        { text: "ATS-Friendly Format", included: true },
        { text: "Unlimited Revisions", included: true },
        { text: "Cover Letter", included: true },
        { text: "LinkedIn Profile Optimization", included: true },
        { text: "48-Hour Delivery", included: true },
        { text: "Career Coaching Session", included: false },
      ],
      ctaLink: "/order/executive"
    },
    {
      title: "Premium",
      price: 349,
      isPopular: false,
      features: [
        { text: "Professional Resume", included: true },
        { text: "ATS-Friendly Format", included: true },
        { text: "Unlimited Revisions", included: true },
        { text: "Cover Letter", included: true },
        { text: "LinkedIn Profile Optimization", included: true },
        { text: "24-Hour Delivery", included: true },
        { text: "60-Min Career Coaching Session", included: true },
      ],
      ctaLink: "/order/premium"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative gradient-bg wave-bg pt-20 pb-32 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Resume Writing Packages
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Choose the perfect package to match your career needs and budget. All packages include ATS-optimized resumes crafted by our expert writers.
          </p>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 px-6 -mt-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <PricingCard
                key={index}
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                isPopular={pkg.isPopular}
                ctaLink={pkg.ctaLink}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom package? Contact us for a personalized quote.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Resume Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver more than just a document – we provide a career advancement tool designed to get you hired.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Writers</h3>
              <p className="text-gray-600">
                Our team consists of experienced resume writers with backgrounds in recruitment and HR across various industries.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">ATS-Friendly Designs</h3>
              <p className="text-gray-600">
                All our resumes are optimized to pass through Applicant Tracking Systems while maintaining professional appeal.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry-Specific</h3>
              <p className="text-gray-600">
                We tailor each resume to your specific industry, incorporating relevant keywords and highlighting key accomplishments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Star size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                If you're not satisfied with your resume, we offer revision options until you're completely happy with the result.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Clock size={40} className="inline" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Turnaround</h3>
              <p className="text-gray-600">
                Standard delivery in 3-5 business days, with expedited options for those with urgent job application deadlines.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Support</h3>
              <p className="text-gray-600">
                Receive dedicated support throughout the process, with direct communication with your writer for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Guarantee Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 md:p-16 text-white">
                <h2 className="text-3xl font-bold mb-6">Our 100% Satisfaction Guarantee</h2>
                <p className="text-lg mb-6">
                  We're confident in the quality of our services. If you're not completely satisfied with your resume, we offer:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Award className="w-6 h-6 mr-2 flex-shrink-0" />
                    <span>Unlimited revisions within the first 7 days</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 mr-2 flex-shrink-0" />
                    <span>Direct communication with your writer</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 mr-2 flex-shrink-0" />
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link to="/order/professional">
                    <Button className="bg-white text-primary hover:bg-gray-100">
                      Get Started Today
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-blue-800 p-10 md:p-16 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">98%</div>
                  <p className="text-2xl">Customer Satisfaction</p>
                  <div className="mt-6 flex justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-lg">Based on 10,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-600">
            Take the first step toward career success with our professional resume writing services.
          </p>
          <Link to="/order/professional">
            <Button className="bg-primary hover:bg-primary-light text-white text-lg px-8 py-6">
              Start Your Order Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Packages;
