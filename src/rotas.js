import { BrowserRouter, Route, Routes } from "react-router-dom";

import Ficha from "./Pages/Ficha"
import Inventario from "./Pages/Inventario"

function Rotas(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Ficha/> }/>        
            <Route path="/Inventario" element={ <Inventario/> }/>        
        </Routes>
    </BrowserRouter>
    );
}



export default Rotas;