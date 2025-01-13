import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { questionsList } from "../constants/constants";

function QuestionList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-500">
        Câu hỏi thường gặp
      </h1>
      <div className="w-full mx-auto">
        {questionsList.map((item, index) => (
          <div key={index} className="border rounded-md mb-2">
            <div
              className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-200"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-medium">{item.question}</h3>
              {openIndex === index ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
            {openIndex === index && (
              <div className="p-4 bg-white border-t">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
