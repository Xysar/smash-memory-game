import React from "react";

function Tutorial() {
  const handleMouseMove = (e) => {
    const cursor = document.getElementById("tooltip");
    cursor.style.opacity = 1;
    const tooltip = document.getElementById("tooltip-container");
    var rect = tooltip.getBoundingClientRect();
    cursor.style.left = e.pageX - rect.left + "px";
    cursor.style.top = e.pageY - rect.top + "px";
  };
  const handleMouseLeave = (e) => {
    const cursor = document.getElementById("tooltip");
    cursor.style.opacity = 0;
  };
  return (
    <div
      id="tooltip-container"
      onMouseOut={(e) => handleMouseLeave(e)}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div id="tip-button">?</div>
      <p id="tooltip">
        Get points by clicking on an image, but don't click on the same card
        more than once!
      </p>
    </div>
  );
}

export default Tutorial;
