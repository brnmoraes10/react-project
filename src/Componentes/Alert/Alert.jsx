// Alert.jsx
import React from 'react';
import styles from './Alert.module.css'; // Usando CSS Modules
export function Alert({ type, message }) {
// Construimos la cadena de clases condicionalmente
let alertClasses = styles.alert; // Clase base
if (type === 'success') {
alertClasses += ` ${styles.success}`;
 } else if (type === 'error') {
alertClasses += ` ${styles.error}`;
 } else {
alertClasses += ` ${styles.info}`;
 }
return (
<div className={alertClasses}>
{message}
</div>
 );
}