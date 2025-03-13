import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import RuletaPage from "./ruletaPage/RuletaPage";
import "../Styles/Game.css";

const GameScreen = () => {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // Simulación: Cargar jugadores desde localStorage o un API
        const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
        setPlayers(storedPlayers);
    }, []);

    return (
        <div className="game-screen">
            <img className="logo-img" src="/img/logo.png" alt="Logo" />

            <button onClick={() => navigate("/Players")} className="back-button">
                <FaArrowLeft size={30} color="white" />
            </button>

            <button 
                className="final-button" 
                onClick={() => navigate("/final", { state: { players } })} 
                disabled={players.length === 0}
            >
                <img className="final-play" src="/img/btnFinal.png" alt="Finalizar" />
            </button>

            <RuletaPage />
        </div>
    );
};

export default GameScreen;
