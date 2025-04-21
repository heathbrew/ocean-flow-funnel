
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import './FaqAccordion.css';

const FaqAccordion = ({ faqs }) => {
  return (
    <Accordion type="single" collapsible className="faq-accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="faq-item">
          <AccordionTrigger className="faq-question">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="faq-answer">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
