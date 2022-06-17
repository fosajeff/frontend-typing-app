import { useEffect, useState } from "react";

import Timer from "../components/Timer";
import Header from "../components/Header";
import FinalScore from "../components/FinalScore";

import textData from "../Data.json";
import GameArena from "../components/GameArena";

export default function Home(props) {
  const initialTextData = textData.text;
  const [paragraphText, setParagraphText] = useState(initialTextData);
  const [gameOver, setGameOver] = useState(false);
  const [ready, setReady] = useState(false);

  const initialTimeInMinutes = 0;
  const initialTimeInSeconds = 0;
  const [minutes, setMinutes] = useState(initialTimeInMinutes);
  const [seconds, setSeconds] = useState(initialTimeInSeconds);

  const [userText, setUserText] = useState("");

  const [textDefault, selectTextDefault] = useState(""); // custom or default
  const [customValues, setCustomValues] = useState({
    paragraphText: "",
    time: "",
    customTime: "",
  });

  const handleChange = (e) => {
    setUserText(e.target.value);
  };

  const handleCustomSetting = (e) => {
    const { name, value } = e.target;
    setCustomValues({ ...customValues, [name]: value });
  };

  const handleGameStart = (e) => {
    e.preventDefault();

    if (customValues.customTime !== "") {
      setMinutes(+customValues.customTime);
      setSeconds(0);
    } else if (customValues.time !== "") {
      setMinutes(+customValues.time);
      setSeconds(0);
    } else {
      return;
    }

    if (textDefault === "custom") {
      setParagraphText(customValues.paragraphText);
    }

    setReady(true);
    setGameOver(false);
  };

  const handleGameOver = () => {
    setGameOver(true);
    setMinutes(0);
    setSeconds(0);
  };

  const handleTryAgain = () => {
    setCustomValues({});
    setGameOver(false);
    setMinutes(0);
    setSeconds(0);
    setParagraphText(textData.text);
    setReady(false);
    setUserText("");
  };

  return (
    <div className="container mt-3">
      <Header
        onGameOver={handleGameOver}
        seconds={seconds}
        onSetSeconds={setSeconds}
        minutes={minutes}
        onSetMinutes={setMinutes}
      />

      {!ready && (
        <>
          <div className="conatiner mt-3">
            <div className="row align-items-center justify-content-center mb-3">
              <div className="col-lg-8">
                <div className="alert alert-info" role="alert">
                  <h4 className="alert-heading">Wellcome!</h4>
                  <p className="text-info">
                    This playground will help you practice your typing skills
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center justify-content-center mb-3">
              <div
                onClick={() => selectTextDefault("custom")}
                role="button"
                className={`mb-4 mb-lg-0 col-lg-4 text-${
                  textDefault === "custom" ? "success" : "dark"
                }`}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Use default text</h5>
                    <p className="card-text">
                      Copy and paste your own practice text.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => selectTextDefault("default")}
                role="button"
                className={`col-lg-4 text-${
                  textDefault === "default" ? "success" : "dark"
                }`}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Use default</h5>
                    <p className="card-text">Use our generated text.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-lg-5 text-center my-3">
              {textDefault === "custom" && (
                <div className="text-center my-4">
                  <h3 className="mb-3">Please paste your text here</h3>
                  <textarea
                    name="paragraphText"
                    className="form-control"
                    onChange={handleCustomSetting}
                    value={customValues.paragraphText}
                    rows="6"
                  ></textarea>
                </div>
              )}

              <h3>Set time</h3>
              <select
                value={customValues.time}
                name="time"
                onChange={handleCustomSetting}
                className="form-control"
              >
                <option>---Choose---</option>
                <option value="1">1 minute</option>
                <option value="2">2 minutes</option>
                <option value="5">5 minutes</option>
              </select>
              <p className="my-2 fw-bold">OR Set Custom Time (In minutes)</p>
              <input
                value={customValues.customTime}
                name="customTime"
                onChange={handleCustomSetting}
                type="number"
                className="form-control"
              />

              <div className="d-grid gap-2 mt-5">
                <button
                  onClick={handleGameStart}
                  className="btn btn-success btn-lg"
                  type="button"
                >
                  BEGIN
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {ready && !gameOver && (
        <GameArena
          onChange={handleChange}
          onGameOver={handleGameOver}
          userText={userText}
          paragraphText={paragraphText}
        />
      )}
      {!ready ||
        (gameOver && (
          <FinalScore
            onTryAgain={handleTryAgain}
            paragraphText={paragraphText}
            userText={userText}
          />
        ))}
    </div>
  );
}
