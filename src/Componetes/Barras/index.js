import {useState} from 'react'


import './index.css'


function Barras(){

    const [numero, setNumero] = useState(
        {'vidaAtual': 151, 'vidaMaxima': 152},
        {'sanidadeAtual':10 ,'sanidadeMaxima':0})
      


    const alterar = (e) => {
        
        switch(e.target.getAttribute('name')){
            case 'vidaAtual':
                setNumero({'vidaAtual': e.target.value,'vidaMaxima': numero.vidaMaxima})
                break;
            case 'vidaMax':
                setNumero({'vidaAtual':numero.vidaAtual,'vidaMaxima':e.target.value})
            /* case 'sanidadeAtual':
                setNumero({'sanidadeAtual':})
 */

        }
        

     /*  if(e.target.getAttribute('name')=='vidaAtual'){
        setNumero({"vidaAtual":e.target.value, "vidaMaxima":numero.vidaMaxima})
      } */
    }
    


    return(
        <div id="CaixaBarras">
            <div>

                <span>Vida</span>
                <div className='containerBarras'>
                  <progress max='120' className='barras' id='vida'/>
                    <div>
                        <input type='number' className='Numeros direita' name='vidaAtual' value={numero.vidaAtual} onChange={(e) => alterar(e)} autoComplete='off'/>
                        <strong> / </strong>
                        <input type='number' className='Numeros' name='vidaMax' value={numero.vidaMaxima} onChange={(e) => alterar(e)} autoComplete='off'/>
                    </div>
                </div>
                        <div className='estado'>
                            <div>
                              <input type='checkbox' name='lesãoGrave'/> <label>Lesão Grave</label>
                              <input type='checkbox' name='inconsciente'/> <label>Inconsciente</label>
                              <input type='checkbox' name='morrendo'/> <label>Morrendo</label>
                            </div>
                        </div>

                <span>Sanidade</span>
                  <div className='containerBarras'>
                    <progress max='120' className='barras' id='sanidade'/>
                        <div>
                         <input type='number' className='Numeros direita' value={numero.sanidadeAtual} onChange={alterar} autoComplete='off'/>
                         <strong> / </strong>
                         <input type='number' className='Numeros' value='75' onChange={alterar} autoComplete='off'/>
                        </div>
                  </div>
                        <div className='estado' id='estadosSanidade'>
                            <div>
                              <input type='checkbox' name='traumatizado'/> <label>Traumatizado</label>
                              <input type='checkbox' name='enloquecido'/> <label>Enloquecido</label>
                            </div>
                        </div>

                <span>Mana</span>
                  <div className='containerBarras'>
                    <progress max='120' className='barras' id='mana'/>
                        <div>
                            <input type='number' className='Numeros direita' value='33' onChange={alterar} autoComplete='off'/>
                            <strong> / </strong>
                            <input type='number' className='Numeros' value='33' onChange={alterar} autoComplete='off'/>
                        </div>
                    </div>

                <span id='PE'>Pontos de Esforço</span>
                  <div className='containerBarras'>
                    <progress max='120' className='barras' id='esforco'/>
                        <div>
                            <input type='number' className='Numeros direita' value='42' onChange={alterar} autoComplete='off'/>
                            <strong> / </strong>
                            <input type='number' className='Numeros' value='42' onChange={alterar} autoComplete='off'/>
                        </div>
                  </div>
            </div>
            
        </div>
    );
}

export default Barras