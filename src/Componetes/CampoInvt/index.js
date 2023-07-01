import "./index.css"
import {Link} from 'react-router-dom'

import Mochila from '../../Imagens/mochila.png'

function CampoInv(){
    return(
        <div id="Inventario">
            <Link to={"/FichaJorge/Inventario" }>
                <img src={Mochila} alt="Mochila" id="mochila"/>
            </Link>
                <div id="txtInvet" className="TextosQueAparecem">
                    <h3>Inventário</h3>
                </div>

        </div>
    );
}

export default CampoInv;