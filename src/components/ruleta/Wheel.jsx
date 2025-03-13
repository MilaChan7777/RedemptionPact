import React, { useState } from "react";
import "./Wheel.css";

const challenges = [
  "Doble Tentación: Cada jugador apuesta 1 vida; quien saque el número más alto en un dado, gana todas.",
  "Encanto Mortal: El jugador elige a otro para intercambiar vidas. Ambos lanzan un dado; el más alto roba 2 vidas del otro.",
  "Batalla de Seducción: Todos los jugadores votan en secreto quién debería perder 1 vida. El que reciba más votos pierde.",
  "Robo Pasional: Si el jugador intercambia posición con otro, el afectado pierde 2 vidas.",
  "Pacto Secreto: Dos jugadores acuerdan compartir 1 vida. Se lanzan dos dados, si suman más de 8, el pacto se cumple; si no, ambos pierden 2 vidas.",
  "Traición Ardiente: Si el jugador ha ayudado a alguien antes, ese jugador puede robarle 1 vida sin avisar.",
  "Tentación Extrema: Si el jugador elige no moverse este turno, gana 1 vida. Pero si decide avanzar, pierde 2 vidas.",
  "Apuesta de Deseo: Cada jugador elige si quiere arriesgar 2 vidas. Si lo hace, lanza un dado; si saca 4 o más, recupera 3 vidas. Si saca menos, las pierde.",
  "Mentiras y Engaños: El jugador hace dos afirmaciones sobre el juego. Si otro jugador descubre la mentira, el mentiroso pierde 2 vidas.",
  "Corrupción Tentadora: Un jugador desafía a otro a un reto de piedra, papel o tijera. El ganador roba 2 vidas del otro.",
  "Festín Egoísta: Cada jugador lanza un dado. El que saque el número más alto gana 2 vidas, el más bajo pierde 1.",
  "Banquete Mortal: Todos pueden apostar 1 vida. El jugador con el dado más alto se queda con todas",
  "Última Cena: El jugador debe convencer a otro de darle 1 vida. Si lo logra, gana 1 vida adicional.",
  "Carrera por la Comida: El primer jugador en decir '¡Yo como!' avanza 2 casillas, pero pierde 1 vida.",
  "Hambre Colectiva: Todos votan si se debe perder 1 vida cada uno o si un solo jugador pierde 3.",
  "Banquete del Diablo: Si el jugador tiene más de 5 vidas, debe donar 1 vida a otro o perder 2 vidas.",
  "Ladrón de Raciones: El jugador elige a otro para intercambiar vidas. Se lanza un dado, si es impar, pierde en lugar de ganar.",
  "Prueba de Resistencia: Si el jugador decide no moverse este turno, gana 1 vida.",
  "Tiranía del Hambre: Si el jugador elige robar 2 vidas a otro, todos los demás pueden votar para que pierda 3 en su lugar.",
  "Banquete de la Avaricia: Si el jugador no ha compartido vidas con nadie antes, pierde 2 vidas automáticamente.",
  "Juego del Ladrón: Todos eligen en secreto a quién robar 1 vida. Si varios eligen al mismo, solo el dado más alto gana la vida.",
  "Banca Rota: Se apuesta 2 vidas en un sorteo donde el mayor número en un dado gana todo.",
  "Robar o Perder: Cada jugador debe decidir si quiere robar 1 vida a otro. Si lo hacen, el que tenga más votos de robo pierde 3 vidas.",
  "Carrera del Avaro: Los dos jugadores con más vidas deben competir lanzando dados. El perdedor pierde 2 vidas.",
  "Castigo al Egoísta: Si el jugador no ha dado vidas a nadie en la partida, pierde 3 vidas.",
  "Intercambio Peligroso: El jugador puede intercambiar sus vidas con otro, pero solo si el otro acepta.",
  "Corrupción Competitiva: Dos jugadores señalan a alguien para robarle 1 vida. Si eligen al mismo, ninguno gana nada.",
  "Apuesta de Poder: Si el jugador arriesga 2 vidas y saca un dado mayor a 4, duplica su apuesta. Si saca menos, las pierde.",
  "El Castigo del Avaro: Si el jugador tiene más de 6 vidas, debe donar 1 vida o perder 2.",
  "Última Oferta: El jugador debe hacer una oferta para intercambiar vidas con otro jugador.",
  "Último en Reaccionar: El último en tocar su ficha pierde 2 vidas.",
  "Turno Express: Si el jugador no toma su decisión en 10 segundos, pierde 1 vida.",
  "Apuesta de Esfuerzo: Todos deben elegir si pierden 1 vida o lanzan un dado. Si sacan menos de 4, pierden 2 vidas.",
  "Duelo de Resistencia: Dos jugadores compiten en dados; el menor número pierde 2 vidas.",
  "Carrera Contra el Tiempo: Todos deciden en 5 segundos si avanzan 1 casilla. Si alguien no lo hace, pierde 1 vida.",
  "Lucha Contra el Letargo: Si el jugador ha perdido 3 turnos, debe competir con otro para no perder 2 vidas.",
  "Actúa o Pierde: Si el jugador decide no moverse, perderá 1 vida por turno hasta que avance.",
  "Esfuerzo Extra: Si el jugador lanza un dado impar, avanza 2 casillas, pero si es par, pierde 1 vida.",
  "Carga Pesada: Si dos jugadores deciden no moverse en su turno, ambos pierden 2 vidas.",
  "Decisión Rápida: Si el jugador responde una pregunta del juego en 5 segundos, gana 1 vida.",
  "Prueba de Fe: Apuesta 2 vidas en un lanzamiento de dado. Par = recupera, impar = pierde.",
  "Dilema Moral: Dos jugadores deben decidir en secreto si se sacrifican por el otro o no.",
  "Debate Celestial: Una pregunta al azar; si el retador responde mal, pierde 2 vidas.",
  "Apuesta del Infierno: Decide entre avanzar 3 casillas y perder 2 vidas o quedarse en su lugar.",
  "Castigo Justo: Todos votan si el jugador debe perder 2 vidas o si otro jugador lo hace.",
  "Traición Religiosa: Si el jugador ha cambiado de equipo en algún reto antes, pierde 2 vidas.",
  "Pacto Hereje: Dos jugadores pueden hacer un acuerdo para intercambiar vidas.",
  "Estrategia de Creencia: Si el jugador ha sido perdonado antes, gana 1 vida.",
  "Juicio de los Caídos: Los jugadores eliminados votan si el jugador avanza o pierde 2 vidas.",
  "Doble Castigo: Si el jugador ha ganado más de 4 vidas, pierde 3 vidas inmediatamente.",
];

const Wheel = () => {
  const [position, setPosition] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState("");
  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomStops = Math.floor(Math.random() * 6) + 5;
    const finalPosition = Math.floor(Math.random() * challenges.length); // Ahora elige de toda la lista

    let count = 0;
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 6);
      count++;
      if (count >= randomStops) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSpinning(false);
          showChallenge(finalPosition);
        }, 500);
      }
    }, 150);
  };

  const showChallenge = (finalPosition) => {
    setCurrentChallenge(challenges[finalPosition]);
    setModalVisible(true);
  };

  return (
    <div className="wheel-container">
      <div className="wheel vertical">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`wheel-item ${index === position ? "selected" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <button onClick={spin} disabled={isSpinning} className="spin-button">
        <img
          className="button-play"
          src="/img/botonPlay.png"
          alt="Botón Girar"
        />
      </button>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{currentChallenge}</p>
            <button onClick={() => setModalVisible(false)}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wheel;
