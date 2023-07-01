import "./index.css"

import prancheta from '../../Imagens/prancheta.png'


function Anotacoes(){
    return(
        <div id="anotacao">
            <a href="#CampoDeAnotacao">
                <img src={prancheta} alt='Prancheta'/>
            </a>
             <div id="txtAnotacao" className="TextosQueAparecem">
                <h3>Anotação</h3>
             </div>
        </div>
    );
}

export default Anotacoes;