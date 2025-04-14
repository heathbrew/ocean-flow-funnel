
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';

interface PackageDetails {
  title: string;
  price: number;
  description: string;
}

const OrderForm: React.FC = () => {
  const { packageType } = useParams<{ packageType: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentJobTitle: '',
    industry: '',
    yearsOfExperience: '',
    careerObjective: '',
    currentResume: null as File | null,
    additionalInfo: '',
  });
  
  // Define the steps in the funnel
  const steps = ['Package', 'Your Info', 'Career Details', 'Payment'];
  
  // Package details based on URL parameter
  const packageDetails: { [key: string]: PackageDetails } = {
    'entry-level': {
      title: 'Entry Level Package',
      price: 99,
      description: 'Perfect for students and recent graduates starting their career.'
    },
    'professional': {
      title: 'Professional Package',
      price: 149,
      description: 'Ideal for professionals with 2-5 years of experience looking to advance their career.'
    },
    'executive': {
      title: 'Executive Package',
      price: 249,
      description: 'Comprehensive package for managers and executives with 5+ years of experience.'
    },
    'premium': {
      title: 'Premium Package',
      price: 349,
      description: 'All-inclusive package for senior executives and C-level professionals.'
    }
  };
  
  const currentPackage = packageType ? packageDetails[packageType] : null;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, currentResume: e.target.files[0] });
    }
  };
  
  const handleNextStep = () => {
    // Very basic validation
    if (currentStep === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.currentJobTitle || !formData.industry || !formData.yearsOfExperience) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
    }
    
    // If on the last step, submit the form
    if (currentStep === steps.length - 1) {
      handleSubmit();
      return;
    }
    
    setCurrentStep(prevStep => prevStep + 1);
  };
  
  const handlePreviousStep = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
  };
  
  const handleSubmit = () => {
    // Here you would typically submit the form data to your backend
    console.log('Form submitted with data:', formData);
    
    // Show success toast
    toast({
      title: "Order Placed Successfully!",
      description: "We've received your order and will be in touch shortly.",
    });
    
    // Navigate to confirmation page
    navigate('/order-confirmation');
  };
  
  // If no valid package type is provided, show error
  if (!currentPackage) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto py-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-6 text-red-600">Package Not Found</h1>
          <p className="mb-8">Sorry, the package you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/packages')} className="bg-primary hover:bg-primary-light">
            View Available Packages
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow py-16 px-6">
        <div className="container mx-auto">
          <ProgressBar currentStep={currentStep} steps={steps} />
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden funnel-step">
            {/* Package Selection Step */}
            {currentStep === 0 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Selected Package</h2>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-2 text-primary">{currentPackage.title}</h3>
                  <p className="text-gray-600 mb-4">{currentPackage.description}</p>
                  <div className="text-2xl font-bold text-primary">${currentPackage.price}</div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/packages')}
                    className="border-gray-300"
                  >
                    Change Package
                  </Button>
                  <Button 
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary-light"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            
            {/* Personal Information Step */}
            {currentStep === 1 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={handlePreviousStep}
                    className="border-gray-300"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary-light"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            
            {/* Career Details Step */}
            {currentStep === 2 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Career Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentJobTitle" className="block text-sm font-medium mb-2">
                      Current/Target Job Title <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="currentJobTitle"
                      name="currentJobTitle"
                      value={formData.currentJobTitle}
                      onChange={handleInputChange}
                      placeholder="Enter your current or target job title"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('industry', value)}
                      value={formData.industry}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="yearsOfExperience" className="block text-sm font-medium mb-2">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('yearsOfExperience', value)}
                      value={formData.yearsOfExperience}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                        <SelectItem value="1-3">1-3 years (Junior)</SelectItem>
                        <SelectItem value="3-5">3-5 years (Mid-Level)</SelectItem>
                        <SelectItem value="5-10">5-10 years (Senior)</SelectItem>
                        <SelectItem value="10+">10+ years (Executive)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="careerObjective" className="block text-sm font-medium mb-2">
                      Career Objective
                    </label>
                    <Textarea
                      id="careerObjective"
                      name="careerObjective"
                      value={formData.careerObjective}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your career objectives and goals"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentResume" className="block text-sm font-medium mb-2">
                      Upload Current Resume (optional)
                    </label>
                    <Input
                      id="currentResume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">
                      Additional Information
                    </label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any additional details you'd like to share with our writers"
                      rows={4}
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={handlePreviousStep}
                    className="border-gray-300"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary-light"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}
            
            {/* Payment Step */}
            {currentStep === 3 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  <div className="flex justify-between mb-2">
                    <span>{currentPackage.title}</span>
                    <span>${currentPackage.price}.00</span>
                  </div>
                  <div className="border-t border-gray-200 my-3"></div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${currentPackage.price}.00</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                  
                  {/* Credit Card Form (simplified for demo) */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                        Card Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium mb-2">
                          Expiry Date <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium mb-2">
                          CVV <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="cvv"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="nameOnCard" className="block text-sm font-medium mb-2">
                        Name on Card <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="nameOnCard"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={handlePreviousStep}
                    className="border-gray-300"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary-light"
                  >
                    Complete Order
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderForm;
