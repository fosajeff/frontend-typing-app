import { useEffect, useState } from "react";

import Timer from "../components/Timer";
import Header from "../components/Header";
import TextParagraph from "../components/TextParagraph";
import FinalScore from "../components/FinalScore";

import { text } from "../Data.json";

export default function Home(props) {
  const [paragraphText, setParagraphText] = useState(text);
  const [userText, setUserText] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleChange = (e) => {
    setUserText(e.target.value);
  };

  const handleSubmit = () => {
    setGameOver(true);
  };

  const initialTimeInMinutes = 0;
  const initialTimeInSeconds = 0;
  const [minutes, setMinutes] = useState(initialTimeInMinutes);
  const [seconds, setSeconds] = useState(initialTimeInSeconds);

  return (
    <div>
      <Header />
      <Timer
        seconds={seconds}
        onSetSeconds={setSeconds}
        minutes={minutes}
        onSetMinutes={setMinutes}
      />

      {gameOver && (
        <FinalScore paragraphText={paragraphText} userText={userText} />
      )}

      <TextParagraph paragraphText={paragraphText} />
      <br />
      <textarea
        onPaste={(e) => e.preventDefault()}
        onDrop={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
        onDrag={(e) => e.preventDefault()}
        value={userText}
        onChange={handleChange}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
