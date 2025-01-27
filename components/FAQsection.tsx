"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Nutrimix?",
      answer:
        "Nutrimix is a premium health mix made from 35 seeds and dry fruits, designed to provide a wholesome and delicious nutritional boost.",
    },
    {
      question: "How do I prepare Nutrimix?",
      answer:
        "To prepare, mix 2 tablespoons of Nutrimix with warm milk or water. You can add jaggery, honey, or rock sugar for sweetness, as per your taste.",
    },
    {
      question: "Is Nutrimix suitable for children?",
      answer:
        "Yes, Nutrimix is suitable for all age groups. However, we recommend consulting with a pediatrician for children under 2 years old.",
    },
    {
      question: "Does Nutrimix contain added sugars or preservatives?",
      answer:
        "No, Nutrimix is free from added sugars, artificial flavors, and preservatives. It’s 100% natural and organic.",
    },
    {
      question: "What are the health benefits of Nutrimix?",
      answer:
        "Nutrimix helps boost immunity, improves energy levels, supports digestion, and provides essential vitamins and minerals.",
    },
    {
      question: "Can Nutrimix be consumed by people with dietary restrictions?",
      answer:
        "Nutrimix is gluten-free and vegan-friendly. If you have specific allergies, please check the ingredient list or consult your doctor.",
    },
    {
      question: "What is the shelf life of Nutrimix?",
      answer:
        "Nutrimix has a shelf life of 6 months when stored in a cool, dry place in an airtight container.",
    },
    {
      question: "How is Nutrimix different from other health mixes?",
      answer:
        "Nutrimix is made from 35 carefully selected seeds and dry fruits, ensuring a unique blend of taste and nutrition. It’s 100% natural with no additives.",
    },
    {
      question: "Can I use Nutrimix in recipes?",
      answer:
        "Yes, Nutrimix can be used in various recipes like smoothies, energy bars, or porridge to enhance their nutritional value.",
    },
    {
      question: "Where is Nutrimix manufactured?",
      answer:
        "Nutrimix is proudly made in small batches to ensure quality and freshness. It is sourced and manufactured locally with care.",
    },
  ];
  
  return (
    <div className="bg-white p-8 rounded-lg  mt-2 ">
      <div className=" inset-0 bg-gradient-to-br from-green-50 to-white rounded-lg transform scale-105 opacity-75 blur-lg"></div>
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-6 relative z-10">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`border-b border-gray-200 ${
              openIndex === index ? "bg-green-50" : "bg-white"
            } rounded-lg overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between  hover:bg-slate-400 items-center py-4 text-left focus:outline-none px-4"
            >
              <span className="text-lg font-semibold text-gray-700 ">
                {faq.question} 
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-gray-700" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-700" />
              )}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="px-4 py-2">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>


    </div>
  );
};

export default FAQSection;
