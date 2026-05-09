import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0 transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-[19px] md:text-[21px] font-bold tracking-tight transition-colors duration-300 text-[#1F2937]`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#FFF1F2] rotate-180' : 'bg-transparent'}`}>
          <ChevronDown 
            className={`w-6 h-6 transition-colors duration-300 ${isOpen ? 'text-[#FF5A6E]' : 'text-gray-400'}`} 
          />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-75 opacity-100 pb-8' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[16px] md:text-[17px] text-gray-500 leading-relaxed max-w-[90%] font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is Bumpi Kicks safe to use during pregnancy?",
      answer: "Yes, Bumpi Kicks is designed as a tracking tool to help you monitor your baby's movements. However, it is not a medical device and should not replace professional medical advice from your healthcare provider."
    },
    {
      question: "How does kick tracking work?",
      answer: "Simply tap the counter every time you feel a distinct movement. The app logs the time and duration of each session to help you establish your baby's unique pattern."
    },
    {
      question: "Can I share my data with my partner or doctor?",
      answer: "Absolutely. You can export your kick logs as a PDF or share a direct link with your partner so they can follow along with the journey."
    },
    {
      question: "Is my data private and secure?",
      answer: "Privacy is our priority. Your data is encrypted and we never sell your personal information to third parties."
    },
    {
      question: "Is Bumpi Kicks free?",
      answer: "Bumpi Kicks offers a robust free version with essential tracking. We also offer a Premium tier for advanced insights and cloud backup."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header Section - Scaled Up */}
        <div className="text-center mb-20">
          <span className="text-[#FF5A6E] text-[14px] font-extrabold uppercase tracking-[0.2em] mb-4 block">
            FAQs
          </span>
          <h2 className="text-[42px] md:text-[56px] font-black text-[#111827] leading-[1.1] tracking-tight mb-6">
            Got Questions? <br />
            <span className="text-[#FF5A6E]">We've Got Answers</span>
          </h2>
          <p className="text-gray-500 text-[18px] md:text-[20px] font-medium max-w-2xl mx-auto">
            Everything you need to know about Bumpi Kicks.
          </p>
        </div>

        {/* Accordion Container - Wider and more spacious */}
        <div className="bg-white px-4 md:px-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;