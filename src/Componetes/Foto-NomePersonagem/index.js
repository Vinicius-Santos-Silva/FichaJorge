import './index.css'

import { useState, useEffect} from "react";   

/* import FtUser from '../../Imagens/usuario.png' */
import FtUser from '../../Imagens/Jorge.jpg'

function Personagem(){
    
    const [nome, setNome] = useState('')

    useEffect(() => {
      const savedValue = localStorage.getItem('NomePersonagem');
      
      if (savedValue) {
        setNome(savedValue);
      }
    }, []);
  
  
   function salvar() {
      localStorage.setItem('NomePersonagem', nome)
    
/*       alert('O nome digitado foi Salvo') */
    }; 

/*    Sem conhecimento necessário para fazer essa função funcionar dd jeito que deveria 

    function trocarImg(){
      const imagemInput = document.getElementById('uploadImg');
      const imagemPreview = document.getElementById('FtUsario');
  
      imagemInput.addEventListener('change', function(e) {
        const arquivo = imagemInput.files[0];
        const leitor = new FileReader();
  
        leitor.onload = function(e) {
          imagemPreview.src = e.target.result;

          localStorage.setItem('imagem', e.target.result);
        }
  
        leitor.readAsDataURL(arquivo);
      });
    } */

    
    return(
        <div id="CampoPersonagem">
          <input 
          type="text" 
          value={nome} 
          placeholder="Digite o nome do Personagem"
          id='input-nome'
          onChange={(e) => {
            setNome(e.target.value);
           /* So precisa dar um espaço no final do nome para salvar ele todo */
          }} 
          onInput={salvar}
          autoComplete='off'
          /> 
      {/*     <button onClick={salvar}>Salvar</button> */}
        <div>
          <img src={FtUser} alt='uploadFt' id='FtUsario'/>
        </div>
      </div>
    );
}

export default Personagem;