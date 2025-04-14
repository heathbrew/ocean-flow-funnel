
import { Check } from 'lucide-react';
import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  currentStep: number;
  steps: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
  return (
    <div className="progress-container">
      <div className="progress-steps">
        {/* Progress line */}
        <div className="progress-line-bg"></div>
        <div 
          className="progress-line-fill" 
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
        
        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="progress-step">
            <div 
              className={`progress-step-circle ${
                index < currentStep 
                  ? 'progress-step-completed' 
                  : index === currentStep 
                    ? 'progress-step-current' 
                    : 'progress-step-future'
              }`}
            >
              {index < currentStep ? (
                <Check className="progress-check-icon" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span 
              className={`progress-step-label ${
                index <= currentStep ? 'progress-step-label-active' : 'progress-step-label-inactive'
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
