import { useState } from "react";



const faqData = [
  { question: "What is Zuvlo?", answer: "Zuvlo is a fan-site where creators can provide exclusive content and interact with each other." },
  { question: "What are the fees on Zuvlo?", answer: "Fees vary based on subscription plans and services." },
  { question: "What features does Zuvlo have compared to other platforms?", answer: "Zuvlo offers unique engagement features and better monetization options." },
  { question: "Does Zuvlo offer chargeback protection?", answer: "Yes, we offer robust chargeback protection." },
  { question: "What are the payout methods available on Zuvlo?", answer: "Payouts are available via PayPal, bank transfer, and crypto." },
  { question: "Does Zuvlo have a Brand Ambassador program?", answer: "Yes, we are still running our Brand Ambassador program, but we have a very limited amount of spots left, so please get in touch with our support team ASAP if you'd like to apply" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mb-8">Everything you need to know about Zuvlo</p>

      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden transition-all duration-300 
            ${openIndex === index 
              ? "shadow-[-20px_0px_40px_-5px_#A0C4FF,0px_0px_40px_-5px_#EFB0C9,20px_0px_40px_-5px_#FDE68A]" 
              : "shadow-lg"}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left bg-white rounded-lg hover:bg-gray-100 transition"
            >
              <span className={`font-semibold text-lg ${openIndex === index ? "text-black" : "text-gray-800"}`}>
                {faq.question}
              </span>
              <span className="text-xl">{openIndex === index ? "➖" : "➕"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700 text-lg">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
