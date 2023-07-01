import "./index.css"

import CampoInv from "../../Componetes/CampoInvt";
import CampoAnotações from "../../Componetes/CampoAnotações";


import FtPersonagem from '../../Imagens/Jorge.jpg'

function Ficha() {
    return(
        <div id="caixa" >
          <CampoInv/>
          <CampoAnotações />
          <div id="ficha">
            <div>
              <img src={FtPersonagem} alt="Foto do Personagem"/>
            </div>
          </div>
        </div>
    );
}

export default Ficha;