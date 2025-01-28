import { useState } from "react";

export default function FAQPage() {
  const faqs = [
    {
      question: "আপনার বাইক শপ থেকে কিভাবে বাইক অর্ডার করতে পারি?",
      answer:
        "আমাদের ওয়েবসাইট থেকে বাইক অর্ডার করার জন্য, প্রোডাক্ট ক্যাটালগ ব্রাউজ করুন, আপনার পছন্দের বাইকটি নির্বাচন করুন, এবং 'অর্ডার করুন' বোতামে ক্লিক করুন।",
    },
    {
      question: "অর্ডার ডেলিভারির সময় কত দিন লাগে?",
      answer:
        "অর্ডার নিশ্চিত হওয়ার পর সাধারণত ৩-৫ কর্মদিবসের মধ্যে ডেলিভারি করা হয়। তবে অঞ্চলভেদে সময়ের কিছুটা পরিবর্তন হতে পারে।",
    },
    {
      question: "আপনার পেমেন্ট অপশনগুলো কি কি?",
      answer:
        "আমরা বিভিন্ন ধরনের পেমেন্ট অপশন গ্রহণ করি যেমন বিকাশ, নগদ, রকেট, এবং ক্রেডিট/ডেবিট কার্ড।",
    },
    {
      question: "বাইকের সাথে কি ওয়ারেন্টি দেয়া হয়?",
      answer:
        "হ্যাঁ, আমরা প্রতিটি বাইকের জন্য ১ বছরের ওয়ারেন্টি প্রদান করি, যা শুধুমাত্র ম্যানুফ্যাকচারিং ত্রুটির জন্য প্রযোজ্য।",
    },
    {
      question: "আমি কি বাইকটি কাস্টমাইজ করতে পারি?",
      answer:
        "হ্যাঁ, আমরা কিছু নির্দিষ্ট মডেলে কাস্টমাইজেশন সেবা প্রদান করি। বিস্তারিত জানতে আমাদের কাস্টমার সার্ভিস টিমের সাথে যোগাযোগ করুন।",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-crimson-red mb-8">
          প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQs)
        </h1>
        <div className="bg-white shadow-md rounded-lg">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 font-semibold text-dark-blue hover:bg-gray-200 focus:outline-none flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  } transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
              <hr className="border-t border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
