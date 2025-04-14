
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './HeroForm.css';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  phone: z.string().min(10, { message: 'Valid phone number is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
});

type FormValues = z.infer<typeof formSchema>;

const HeroForm: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    form.reset();
    alert('Thank you for your interest! Our team will contact you shortly.');
  };

  return (
    <div className="hero-form">
      <h3 className="hero-form-title">Please Provide Your Details</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="hero-form-fields">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Name*" 
                    className="hero-form-input" 
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="hero-form-phone">
                    <div className="hero-form-country-code">
                      +91
                    </div>
                    <Input 
                      placeholder="Phone Number*" 
                      className="hero-form-phone-input" 
                      type="tel"
                      {...field} 
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="E-mail*" 
                    className="hero-form-input" 
                    type="email"
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <div className="hero-form-recaptcha">
            <div className="hero-form-recaptcha-box">
              <div className="hero-form-recaptcha-checkbox"></div>
              <span className="hero-form-recaptcha-text">I'm not a robot</span>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="hero-form-submit"
          >
            submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default HeroForm;
