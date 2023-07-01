import "./index.css"

/* Componentes */
import CampoInv from "../../Componetes/CampoInvt";
import CampoAnotações from "../../Componetes/CampoAnotações";
import Personagem from '../../Componetes/Foto-NomePersonagem'


function Ficha() {

/* Opçoões para os campos que serão utiliados local storage:
A opção mais provavél seja uma renderização condicional para salvar todas as alterações, so não sei como fazer isso.

Mas a outro opção seria fazer uma renderização condicional em que aparece um botão de salvar caso o usuário altere
algo.

E a ideia para a alteração dos nomes dos personagens são duas. A primeira é um input mesmo no nome
e a segunda criar um campo nos dados pessoais de nome do personagem.

*/

  return(
        <div id="caixa" >
          <CampoInv/>
            <CampoAnotações />  
          <div id="ficha">  
            <Personagem/>



          </div>
        </div>
    );
}

export default Ficha;