import './index.css'

import { useState, useEffect} from "react";   

import FtUser from '../../Imagens/usuario.png'

function Personagem(){
    
    const [nome, setNome] = useState('')

    useEffect(() => {
      const savedValue = localStorage.getItem('NomePersonagem');
      
      if (savedValue) {
        setNome(savedValue);
      }
    }, []);
  
  
   const salvar = () =>{
      localStorage.setItem('NomePersonagem', nome)
    
      alert('O nome digitado foi Salvo')
  


    };

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
    }

    
    return(
        <div id="CampoPersonagem">
        <strong> 
          <input 
          type="text" 
          value={nome} 
          onChange={(e) => {setNome(e.target.value)}} 
          placeholder="Digite o nome do Personagem"
          /> 
          <button onClick={salvar}>Salvar</button>
        </strong>

        <div id='containerImg'>
          <img src={FtUser} alt='uploadFt' id='FtUsario'/>

          <input 
          type='file' 
          id='uploadImg' 
          accept='image*/' 
          onClick={trocarImg}/>

        </div>
      </div>
    );
}

export default Personagem;