
import { Check } from 'lucide-react';
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  steps: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-10">
      <div className="flex justify-between relative">
        {/* Progress line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-300" 
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
        
        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative z-10">
            <div 
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                ${index < currentStep 
                  ? 'bg-primary border-primary text-white' 
                  : index === currentStep 
                    ? 'bg-white border-primary text-primary' 
                    : 'bg-white border-gray-300 text-gray-400'
                } transition-all duration-300`}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span 
              className={`mt-2 text-sm font-medium ${
                index <= currentStep ? 'text-primary' : 'text-gray-400'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
