import React from "react";

const TextParagraph = ({ paragraphText }) => {
  return (
    <div style={{ border: "1px solid blue", width: "20%" }}>
      {paragraphText}
    </div>
  );
};

export default TextParagraph;
