import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Players from "./screens/Players";
import GameScreen from "./screens/Game";
import Results from "./screens/Results";
import Instructions from "./screens/Instructions";
import { GameProvider } from "./context/GameContext";
import FinalPage from "./screens/finalPage/finalPage";
import "./App.css";

export default function App() {
    return (
        <GameProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<Players />} />
                <Route path="/game" element={<GameScreen />} />
                <Route path="/results" element={<Results />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/final" element={<FinalPage />} />
            </Routes>
        </GameProvider>
    );
}
