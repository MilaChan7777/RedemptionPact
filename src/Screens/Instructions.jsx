import "../Styles/Instructions.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

export default function Instructions() {
  const navigate = useNavigate();

  return (
    <div className="instructions-container">
      <button onClick={() => navigate("/")} className="back-button">
        <FaArrowLeft size={30} color="white" />
      </button>
      <img className="instrucciones" src="/img/instrucciones.png" alt="Instrucciones" />
    </div>
  );
}
