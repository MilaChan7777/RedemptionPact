const PlayerList = ({ players, handleDelete }) => {
  return (
      <div className="players-list">
          {players.map(player => (
              <div key={player.id} className="player-item">
                  <img src={player.avatar} alt="Avatar" className="player-avatar" />
                  <span>{player.name}</span>
                  <button className="delete-button" onClick={() => handleDelete(player.id)}>✖</button>
              </div>
          ))}
      </div>
  );
};
