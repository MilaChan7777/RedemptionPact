import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Scoreboard() {
    const { scores } = useContext(GameContext);
    return (
        <div>
            <h2>Tabla de Posiciones</h2>
            <ul>
                {Object.entries(scores).map(([player, score]) => (
                    <li key={player}>{player}: {score} puntos</li>
                ))}
            </ul>
        </div>
    );
}