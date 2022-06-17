import React, { useState } from "react";
import TextParagraph from "./TextParagraph";

const GameArena = ({ onChange, paragraphText, userText, onGameOver }) => {
  const handleSubmit = () => {
    onGameOver();
  };

  return (
    <div className="row justify-content-center align-items-center  mt-3">
      <div className="col-md-9">
        <TextParagraph paragraphText={paragraphText} />
        <br />
        <div className="text-center">
          <textarea
            className="form-control"
            rows="6"
            onPaste={(e) => e.preventDefault()}
            onDrop={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            onDrag={(e) => e.preventDefault()}
            value={userText}
            onChange={onChange}
          ></textarea>
          <br />
          <div className="d-grid gap-2 mt-5">
            <button
              onClick={handleSubmit}
              className="btn btn-success btn-lg"
              type="button"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameArena;
