import './index.css'

import { useState, useEffect } from "react";   

import FtPersonagem from '../../Imagens/Jorge.jpg'

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
  
  /*     
    const mensagem = localStorage.getItem('NomePersonagem');
    console.log(mensagem)
      if(mensagem !== '' || null || undefined ){
  
      }
      else{
        alert('Nome alterado com sucesso!')
      }  */
    };
    
    return(
        <div id="CampoPersonagem">
        <strong> 
          <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} 
          placeholder="Digite o nome do Personagem"/> 
          <button onClick={salvar}>Salvar</button>
        </strong>
        <img src={FtPersonagem} alt="Foto do Personagem"/>
      </div>
    );
}

export default Personagem;