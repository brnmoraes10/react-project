import React from 'react'

export default function BotonCssInLine() {
// Definimos los estilos en un objeto JavaScript
const estilosBoton = {
    
backgroundColor: '#28a745',
color: 'white',
border: 'none',
borderRadius: '5px',
padding: '10px 20px',
fontSize: '16px',
fontWeight: 'bold',
fontFamily: 'Arial, sans-serif',
cursor: 'pointer',
transition: 'background-color 0.3s ease, transform 0.1s ease',
 };
 
return (
<button style={estilosBoton}>
 Púlsame
</button>
 )
}