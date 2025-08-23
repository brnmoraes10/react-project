import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function UserProfile() {
const { id } = useParams();
const [userData, setUserData] = useState(null);
useEffect(() => {
// Simulación de llamada a API para obtener datos del usuario
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 .then(response => response.json())
 .then(data => {
setUserData(data);
console.log(data);
 })
 .catch(error => console.error('Error al cargar datos:', error));
 }, [id]);
if (!userData) {
return <p>Cargando información del usuario...</p>;
 }
return (
<div>
<h2>Perfil del usuario: {userData.name}</h2>
<p>Email: {userData.email}</p>
<p>Edad: {userData.age}</p>
{/* Más información del usuario */}
</div>
 );
}
export default UserProfile;