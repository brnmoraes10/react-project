import axios from 'axios';
// 1. Se crea una instancia de Axios con una configuración base.
const apiClient = axios.create({
baseURL: 'https://jsonplaceholder.typicode.com', // URL base de la API
headers: {
'Content-Type': 'application/json',
 },
});
const url = 'https://jsonplaceholder.typicode.com'
// 2. Se define y exporta la función asíncrona para obtener los usuarios.
export const fetchUsers = async () => {
try {
// 3. Se realiza la petición GET al endpoint '/users'.
const response = await axios.get('https://jsonplaceholder.typicode.com/users')
// 4. Axios devuelve los datos de la respuesta en la propiedad `data`.
return response.data;
 } catch (error) {
// 5. Si la petición falla, se captura el error y se lanza de nuevo.
console.error('Error al obtener los datos de los usuarios:', error);
throw error;
 }
};