import React from "react";
import "../style.css";

const Qap1 = () => {
  return (
    <div className="component-box">
      <div className="text-left">
        <h2>QAP-1</h2>
        <p>
          This was a simple html project I made at the start of my second term
          at keyin college. I plan to update this with my new projects In the
          future.
        </p>
      </div>
      <div className="project-box">
        <iframe
          src="https://ddunphy12.github.io/Qap-1/"
          title="QAP1"
          className="iframe-custom"
          style={{ width: "100vw", height: "100%", border: "none" }}
        ></iframe>
      </div>
      <p>
        Click{" "}
        <a
          href="https://github.com/Ddunphy12/Qap-1"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        to interact with the code.
      </p>
    </div>
  );
};

export default Qap1;
