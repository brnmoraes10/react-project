import React, { useState } from "react";

function Contador() {

  const [conteo, setConteo] = useState(0);

  const reiniciar = () => {
    setConteo(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{conteo}</p>

      <button
        onClick={() => setConteo(conteo + 1)}
        style={{ margin: "5px", padding: "10px" }}
      >
        Incrementar
      </button>

      <button
        onClick={() => setConteo(conteo - 1)}
        style={{ margin: "5px", padding: "10px" }}
      >
        Decrementar
      </button>

      <button
        onClick={reiniciar}
        style={{ margin: "5px", padding: "10px" }}
        >
        Reiniciar
      </button>

    </div>


  );
}

export default Contador;
