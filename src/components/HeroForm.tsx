
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-primary">Please Provide Your Details</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Name*" 
                    className="bg-gray-100" 
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
                  <div className="flex">
                    <div className="bg-gray-100 flex items-center px-3 rounded-l-md border border-r-0 border-input">
                      +91
                    </div>
                    <Input 
                      placeholder="Phone Number*" 
                      className="bg-gray-100 rounded-l-none" 
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
                    className="bg-gray-100" 
                    type="email"
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <div className="pt-2">
            <div className="bg-gray-100 rounded p-4 mb-4 flex items-start">
              <div className="w-4 h-4 mr-2 border border-gray-400 mt-1"></div>
              <span className="text-sm text-gray-600">I'm not a robot</span>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-dark text-white"
          >
            submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default HeroForm;
