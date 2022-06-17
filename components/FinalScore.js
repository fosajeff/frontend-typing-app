import React, { useEffect, useState } from "react";

const FinalScore = ({ paragraphText, userText, onTryAgain }) => {
  const [score, setScore] = useState(0);

  const originalTextArray = paragraphText.split(" ");
  const userTextSubmissionArray = userText.split(" ");

  useEffect(() => {
    let totalScore = 0;
    originalTextArray.forEach((textArray1, index) => {
      const textArray2 = userTextSubmissionArray[index];
      if (textArray1 === textArray2) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  }, []);

  return (
    <div className="text-center mt-5 pt-5">
      <h1>Congratulations!!</h1>
      <span className="h3 mt-3 pe-2 text-warning">Final Score Is</span>{" "}
      <span className="h3"> {score}</span>
      <div>
        <button
          onClick={onTryAgain}
          className="btn btn-success btn-lg mt-4"
          type="button"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
};

export default FinalScore;
