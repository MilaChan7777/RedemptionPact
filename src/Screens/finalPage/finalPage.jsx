import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./final.css";
import { GameContext } from "../../context/GameContext";

function FinalPage() {
  const { players, resetGame } = useContext(GameContext);
  const navigate = useNavigate();
  const [sortedPlayers, setSortedPlayers] = useState([]);

  // Ordenar jugadores en cada render
  useEffect(() => {
    if (players.length > 0) {
      const sorted = [...players].sort((a, b) => b.lives - a.lives);
      setSortedPlayers(sorted);
    }
  }, [players]); // Se ejecuta cada vez que cambian los jugadores

  if (players.length === 0) {
    return (
      <div className="final-container">
        <h1>No hay datos de la partida.</h1>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  // Determinar cielo, infierno y limbo
  const heaven = sortedPlayers.length > 0 ? sortedPlayers[0] : null;
  const hell = sortedPlayers.filter(player => player.lives === 0);
  const limbo = sortedPlayers.filter(player => player.lives > 0 && player !== heaven);

  return (
    <div className="final-container">
      <img className="logo-2" src="./img/logo.png" alt="Logo" />
      <h1 className="final-title">PARTIDA FINALIZADA</h1>

      <div className="results-row">
        {/* CIELO */}
        <div className="heaven">
          <h1 className="title-cielo">Cielo</h1>
          {heaven && (
            <div className="player-final">
              <img src={heaven.avatar} alt={heaven.name} className="player-avatar" />
              <p className="player-text">{heaven.name} ha escapado del infierno.</p>
            </div>
          )}
        </div>

        {/* LIMBO */}
        <div className="limbo">
          <h1 className="title-limbo">Limbo</h1>
          {limbo.length > 0 ? (
            limbo.map((player) => (
              <div key={player.name} className="player-final">
                <img src={player.avatar} alt={player.name} className="player-avatar" />
                <p className="player-text">{player.name} quedó en el limbo.</p>
              </div>
            ))
          ) : (
            <p>Nadie quedó en el limbo.</p>
          )}
        </div>

        {/* INFIERNO */}
        <div className="hell">
          <h1 className="title-hell">Infierno</h1>
          {hell.length > 0 ? (
            hell.map((player) => (
              <div key={player.name} className="player-final">
                <img src={player.avatar} alt={player.name} className="player-avatar" />
                <p className="player-text">{player.name} ha sido condenado al infierno.</p>
              </div>
            ))
          ) : (
            <p>Nadie fue al infierno.</p>
          )}
        </div>
      </div>

      <button
        onClick={() => {
          resetGame(); // Limpia los jugadores y puntajes
          navigate("/");
        }}
      >
        <img src="/img/botonReplay.png" alt="Reiniciar" className="button-image" />
      </button>
    </div>
  );
}

export default FinalPage;
