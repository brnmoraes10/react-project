import React from 'react';
import styles from "./Boton.module.css"
export default function Boton() {
const handleClick = () => {
alert('Se presionó el botón fijo.');
 };
// El texto "Púlsame" también está fijo DENTRO del componente.
return (
<button
className={styles.botonContainer}
onClick={handleClick}
>
 Púlsame
</button>
 );
}