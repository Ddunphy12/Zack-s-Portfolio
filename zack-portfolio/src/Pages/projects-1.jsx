import React from "react";
import "../style.css";

const Qap1 = () => {
  return (
    <div className="component-box">
      <div className="text-left">
        <h2></h2>
        <p></p>
        <p></p>
      </div>
      <div className="project-box">
        <iframe
          src="https://ddunphy12.github.io/Qap-1/"
          title="QAP1"
          className="iframe"
        ></iframe>
        ;
      </div>
      <p>
        Click{" "}
        <a href="https://github.com/Ddunphy12/Qap-1" target="_blank">
          here
        </a>{" "}
        to interact with the code.
      </p>
    </div>
  );
};

export default Qap1;
