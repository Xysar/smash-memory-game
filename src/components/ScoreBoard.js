import React, { useState } from "react";

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className="scoreboard">
      <p>Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}
export default ScoreBoard;
