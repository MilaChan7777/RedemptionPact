import { Link } from "react-router-dom";
import "./../Styles/Home.css";
import logo2 from "./../assets/logo2.png";
import botonstart from "./../assets/botonstart.png";
import homeimage from "./../assets/homeimage.png";

export default function Home() {
  return (
    <div className="home-page"> 
      <div className="home-container">
        <div className="marcouno"> </div>
        <div className="left-content">
          <img src={logo2} alt="logo" className="logo" />
          <Link to="/players">
            <img src={botonstart} alt="botonstart" className="botonstart" />
          </Link>
          <Link to="/Instructions" className="instructions-button">
            Instrucciones
          </Link>
        </div>
        <div className="right-content">
          <img src={homeimage} alt="homeimage" className="homeimage" />
        </div>
      </div>
    </div>
  );
}