import React from 'react'
import Boton from '../Componentes/Boton/Boton'
import { Alert } from '../Componentes/Alert/Alert'
import ListaUsuarios from '../Componentes/ListaUsuarios/ListaUsuarios'
import UserCard from '../Componentes/UsersCard/UserCard'

export default function Home() {
  return (
    <div>
        <h1>Esta es la pagina Home</h1>
        <Boton/>
        <Alert type="success" message="¡Operación completada con éxito!" />
        <Alert type="error" message="Ha ocurrido un error." />
        <Alert type="info" message="Información importante." />

        <ListaUsuarios/>
    </div>
  )
}
