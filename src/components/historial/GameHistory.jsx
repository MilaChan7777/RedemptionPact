import React from "react";
import "./story.css";

const GameHistory = ({ history }) => {
  return (
    <div className="game-history">
      <h2>Historial</h2>
      <ul>
        {history.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;
