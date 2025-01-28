import { useState } from "react";
import "./FAQ.css"; // Import the CSS file

function FAQ() {
  const data = [
    {
      id: "1",
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: "2",
      question: "How do I install React?",
      answer:
        "You can install React using npm or yarn: `npx create-react-app my-app`.",
    },
    {
      id: "3",
      question: "Is React free to use?",
      answer: "Yes, React is open-source and free to use.",
    },
  ];

  const [open, setOpen] = useState(Array(data.length).fill(false));

  const toggleAnswer = (index) => {
    setOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="faq-container">
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
      {data.map((q, index) => (
        <div key={q.id} className="faq-item">
          <p className="faq-question" onClick={() => toggleAnswer(index)}>
            {q.question}
          </p>
          {open[index] && <div className="faq-answer">{q.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
