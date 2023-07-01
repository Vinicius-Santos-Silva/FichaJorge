import { BrowserRouter, Route, Routes } from "react-router-dom";

import Ficha from "./Pages/Ficha"
import Inventario from "./Pages/Inventario"

function Rotas(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/FichaJorge" element={ <Ficha/> }/>        
            <Route path="/FichaJorge/Inventario" element={ <Inventario/> }/>        
        </Routes>
    </BrowserRouter>
    );
}



export default Rotas;