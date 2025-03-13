import { useState } from "react";

export default function Roulette() {
    const [selected, setSelected] = useState(null);

    function spinRoulette() {
        setSelected(Math.floor(Math.random() * 10) + 1);
    }

    return (
        <div>
            <h3>Ruleta</h3>
            <button onClick={spinRoulette}>Girar</button>
            {selected && <p>Resultado: {selected}</p>}
        </div>
    );
}