import "./index.css"
import { useState, useEffect } from "react";

/* Componentes */
import CampoInv from "../../Componetes/CampoInvt";
import CampoAnotações from "../../Componetes/CampoAnotações";

/* Imagens */
import FtPersonagem from '../../Imagens/Jorge.jpg'

function Ficha() {
    
  const [nome, setNome] = useState('')

  useEffect(() => {
    const savedValue = localStorage.getItem('NomePersonagem');
    
    if (savedValue) {
      setNome(savedValue);
    }
  }, []);


 const salvar = () =>{
    localStorage.setItem('NomePersonagem', nome)
    
    const mensagem = localStorage.getItem('NomePersonagem');
    alert('O nome digitado foi Salvo')

/*     console.log(mensagem)
    if(mensagem !== '' || null || undefined ){

    }
    else{
      alert('Nome alterado com sucesso!')
    }  */
  };


  return(
        <div id="caixa" >
          <CampoInv/>
          <CampoAnotações />  
          <div id="ficha">
            <div id="CampoPersonagem">
              <h1> 
                <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}} placeholder="Digite o nome do Personagem"/> 
                <button onClick={salvar}>Salvar</button>
              </h1>
              <img src={FtPersonagem} alt="Foto do Personagem"/>
            </div>
          </div>
        </div>
    );
}

export default Ficha;