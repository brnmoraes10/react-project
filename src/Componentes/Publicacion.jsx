
import React from "react";

function Publicacion({ autor, contenido }) {
  return (
    <div>
      <p style={{ fontWeight: "bold", margin: "0 0 5px 0" }}>{autor}</p>
      <p style={{ margin: 0 }}>{contenido}</p>
      
    </div>
  );
}

export default Publicacion;
