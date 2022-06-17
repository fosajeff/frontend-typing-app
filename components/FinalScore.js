import React, { useEffect, useState } from "react";

const FinalScore = ({ paragraphText, userText }) => {
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

  return <div>FinalScore {score}</div>;
};

export default FinalScore;
