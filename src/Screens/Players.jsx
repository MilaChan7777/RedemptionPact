import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";
import "../Styles/Players.css";
import frameplayers from "../assets/frameplayers.png";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import playersone from "../assets/playersone.png";

export default function Players() {
  const avatarOptions = [
    { src: "/src/assets/avaricia.png", name: "Avaricia" },
    { src: "/src/assets/violencia.png", name: "Violencia" },
    { src: "/src/assets/lujuria.png", name: "Lujuria" },
    { src: "/src/assets/fraude.png", name: "Fraude" },
    { src: "/src/assets/gula.png", name: "Gula" },
    { src: "/src/assets/pereza.png", name: "Pereza" },
    { src: "/src/assets/herejia.png", name: "Herejía" },
  ];

  const { players, setPlayers } = useContext(GameContext);
  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();

  const getRandomAvatar = () => {
    return avatarOptions[Math.floor(Math.random() * avatarOptions.length)].src;
  };

  const addPlayer = () => {
    if (name.trim() !== "") {
      setPlayers([
        ...players,
        { id: Date.now(), name, avatar: getRandomAvatar(), lives: 0 },
      ]); // ✅ Vidas inician en 0
      setName("");
    }
  };

  const removePlayer = (index) => {
    setPlayers((prev) => prev.filter((_, i) => i !== index));
  };

  const changeAvatar = (playerId, newAvatar) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === playerId ? { ...player, avatar: newAvatar } : player
      )
    );
    setSelectedAvatar(null);
  };

  const handleAvatarClick = (event, index) => {
    const rect = event.target.getBoundingClientRect();
    setMenuPosition({
      top: rect.top + window.scrollY,
      left: rect.right + 10,
    });
    setSelectedAvatar(index);
  };

  return (
    <div className="players-page">
      <button onClick={() => navigate("/")} className="back-button">
        <FaArrowLeft size={30} color="white" />
      </button>

      <h2 className="title">INGRESA A LOS JUGADORES</h2>

      <div className="frame-players">
        <img
          src={frameplayers}
          alt="Marco de jugadores"
          className="frame-image"
        />
        <div className="players-list">
          {players.map((player, index) => (
            <div key={player.id} className="player-item">
              <div
                className="avatar-container"
                onClick={(e) => handleAvatarClick(e, index)}
              >
                <img
                  src={player.avatar}
                  alt={`Avatar de ${player.name}`}
                  className="player-avatar"
                />
              </div>

              <p className="player-name">{player.name}</p>

              <button
                onClick={() => removePlayer(index)}
                className="remove-button"
              >
                <FaTimes size={16} color="white" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="input-container">
        <img
          src={playersone}
          alt="Player sentado"
          className="playersone-icon"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa el nombre del jugador"
        />
        <button onClick={addPlayer} className="add-button">
          Agregar
        </button>
      </div>

      <button
        onClick={() => {
          setPlayers(
            (prevPlayers) =>
              prevPlayers.map((player) => ({ ...player, lives: 5 })) // Asignar 5 vidas
          );
          navigate("/game"); // Navegar a la pantalla del juego
        }}
        className="start-button"
        disabled={players.length === 0}
      >
        Iniciar Juego
      </button>

      {selectedAvatar !== null && (
        <div
          className="avatar-options"
          style={{ top: menuPosition.top, left: menuPosition.left }}
        >
          <button
            className="close-avatar-options"
            onClick={() => setSelectedAvatar(null)}
          >
            <FaTimes size={12} color="white" />
          </button>
          {avatarOptions.map((avatar, i) => (
            <div
              key={i}
              className="avatar-option-container"
              onClick={() =>
                changeAvatar(players[selectedAvatar].id, avatar.src)
              }
            >
              <img
                src={avatar.src}
                alt={avatar.name}
                className="avatar-option"
              />
              <span className="avatar-name">{avatar.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
