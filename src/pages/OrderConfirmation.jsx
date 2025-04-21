
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Clock, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderConfirmation = () => {
  // Random order ID for demo purposes
  const orderId = 'RO-' + Math.floor(100000 + Math.random() * 900000);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
              <p className="text-gray-600">Thank you for trusting Resume Ocean with your career documents.</p>
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Order ID</span>
                <span className="font-semibold">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date</span>
                <span className="font-semibold">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">What Happens Next?</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Questionnaire</h3>
                    <p className="text-gray-600">You'll receive a detailed questionnaire via email to gather more information about your experience and career goals.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Writer Assignment</h3>
                    <p className="text-gray-600">We'll assign a writer specialized in your industry to work on your documents.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">First Draft Delivery</h3>
                    <p className="text-gray-600">You'll receive your first draft within 3-5 business days after completing the questionnaire.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about your order, please contact our customer support team:
              </p>
              <div className="text-primary font-medium">
                <div>Email: support@resumeocean.com</div>
                <div>Phone: (800) 123-4567</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link to="/" className="text-center">
                <Button variant="outline" className="w-full">
                  Return to Home
                </Button>
              </Link>
              <Button className="w-full bg-primary hover:bg-primary-light">
                View Order Status
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">While You Wait...</h3>
            <p className="text-gray-600 mb-6">
              Check out our blog for helpful career advice and job search tips!
            </p>
            <Link to="/blog">
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Visit Our Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
