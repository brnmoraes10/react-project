
import './App.css';
import Publicacion from './Componentes/Publicacion';
import Contador from './Componentes/Contador';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './Componentes/UserProfile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path='/user/:id' element={<UserProfile />}/>

        </Routes>
      
    
      
      </BrowserRouter>


{/*       <header className="App-header">

      <Publicacion 
        autor="Brayan Moraes" 
        contenido="Estoy aprendiendo React con componentes reutilizables" 
      />

      <Publicacion 
        autor="Ana López" 
        contenido="React me permite organizar mejor mis proyectos de frontend" 
      />

      <Contador/>
      </header> */}
    </div>
  );
}

export default App;
