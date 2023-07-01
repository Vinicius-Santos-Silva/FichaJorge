import "./index.css"

import CampoInv from "../../Componetes/CampoInvt";
import CampoAnotações from "../../Componetes/CampoAnotações";

function Ficha() {
    return(
        <div id="caixa" >
          <CampoInv/>
          <CampoAnotações />
          <div id="ficha">

          </div>
        </div>
    );
}

export default Ficha;