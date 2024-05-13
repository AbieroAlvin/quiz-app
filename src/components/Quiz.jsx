import { useState } from "react";
import questions from "../data/questions";
import { useEffect } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      setShowResult(true);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };
  return (
    <div>
      {showResult ? (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
          <p className="mb-4">
            You scored {score} out of {questions.length} questions.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => window.location.reload()}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <div className="text-lg font-bold">
              {" "}
              Time Left: {formatTime(timeLeft)}
            </div>
          </div>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          <div>
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-2 mb-2"
                onClick={() => handleAnswer(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
