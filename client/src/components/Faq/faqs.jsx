import { useState } from "react";
import FaqItem from "./FaqItem";
import image from "../../../assets/Ethiopia-12.jpg";
const faqs = [
  {
    question: "How the system works ?",
    answer:
      "React is a JavaScript library for building user interfaces. It helps developers create reusable components and manage complex UIs efficiently.",
  },
  {
    question: "How can we contact the owner?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that provides a low-level collection of classes for building responsive layouts. It gives developers granular control over styles.",
  },
  {
    question: "How can i buy art works",
    answer:
      "Tailwind CSS is a utility-first CSS framework that provides a low-level collection of classes for building responsive layouts. It gives developers granular control over styles.",
  },
  {
    question: "Is the system reliable",
    answer:
      "Tailwind CSS is a utility-first CSS framework that provides a low-level collection of classes for building responsive layouts. It gives developers granular control over styles.",
  },
  // Add more FAQ items here
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null); // Track active FAQ item

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full h-min text-black my-5 ">
        <h2 className="text-2xl font-bold text-center font-serif mb-5">
          Frequently Asked Questions
        </h2>
        <div className="flex justify-between items-center px-5">
        <div className="w-[50%] h-min pr-5 ">
        {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
          <img src="../../../assets/frequntlyasked.jpeg" className="w-[50%] h-[350px]"  alt="" />
        </div>
      </div>
   
  );
}

export default Faq;
