import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

function Cards({ portraits, order, onClick }) {
  return (
    <div className="cards-container">
      {order.map((i) => {
        return (
          <img
            className="card"
            key={uniqid()}
            alt="character portrait"
            data={portraits[i].num}
            src={portraits[i].image}
            onClick={() => onClick(portraits[i].num)}
            role="button"
          />
        );
      })}
    </div>
  );
}

export default Cards;
