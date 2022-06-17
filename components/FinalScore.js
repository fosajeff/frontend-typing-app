import React, { useEffect, useState } from "react";

const FinalScore = ({ paragraphText, userText, onTryAgain, duration }) => {
  const [score, setScore] = useState(0);
  const [correctWordsCount, setCorrectWordsCount] = useState(0);

  const originalTextArray = paragraphText.split(" ");
  const userTextSubmissionArray = userText.split(" ");

  useEffect(() => {
    let totalScore = 0;
    let noCorrectWords = 0;
    originalTextArray.forEach((textArray1, index) => {
      const textArray2 = userTextSubmissionArray[index];
      if (textArray1 === textArray2) {
        totalScore += 1;
        noCorrectWords += 1;
      }
    });
    setScore(totalScore);
    setCorrectWordsCount(noCorrectWords);
  }, []);

  const accuracyScore = Math.round(
    (correctWordsCount / originalTextArray.length) * 100
  );
  const speed = Math.round(correctWordsCount / duration);

  return (
    <div className="text-center mt-5 pt-5">
      <h1>Congratulations!!</h1>
      <span className="h3 mt-3 pe-2 text-warning">
        Total Correct Words
      </span>{" "}
      <span className="h3"> {score}</span>
      <div className="text-muted h3 mt-3">Accuracy score: {accuracyScore}%</div>
      <div className="text-muted h3">Speed: {speed} WPM</div>
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
