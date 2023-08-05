import {useState} from 'react'


import './index.css'


function Barras(){

    const [vida, setVida] = useState( {'Atual': 151, 'Maxima': 152})
    const [sanidade, setSanidade] = useState( {'Atual': 75, 'Maxima': 75})
    const [mana, setMana] = useState( {'Atual': 33, 'Maxima': 33})
    const [esforco, setEsforco] = useState( {'Atual': 42, 'Maxima': 42})
      
    
    const alterar = (e) => {
        
        switch(e.target.getAttribute('name')){
            case 'vidaAtual':
                setVida({'Atual': e.target.value,'Maxima': vida.Maxima})
                break;
            case 'vidaMax':
                setVida({'Atual':vida.Atual,'Maxima':e.target.value})
                break;
            case 'sanidadeAtual':
                setSanidade({'Atual':e.target.value, 'Maxima': sanidade.Maxima})
                break;
            case 'sanidadeMax':
                setSanidade({'Atual':sanidade.Atual, 'Maxima': e.target.value})
                break;
            case 'manaAtual':
                setMana({'Atual':e.target.value, 'Maxima': mana.Maxima})
                break;
            case 'manaMax':
                setMana({'Atual':mana.Atual, 'Maxima': e.target.value})
                break;
            case 'esforcoAtual':
                setEsforco({'Atual':e.target.value, 'Maxima': esforco.Maxima})
                break;
            case 'esforcoMax':
                setEsforco({'Atual':esforco.Atual, 'Maxima': e.target.value})
                break;
            default:
                alert('Nada alterado!')
                break;
        }

    }


    
    return(
        <div id="CaixaBarras">
            <div>

                <span>Vida</span>
                <div className='containerBarras'>
                  <progress max='120' className='barras' id='vida'/>
                    <div>
                        <input type='number' className='Numeros direita' name='vidaAtual' value={vida.Atual} onChange={(e) => alterar(e)} autoComplete='off'/>
                        <strong> / </strong>
                        <input type='number' className='Numeros' name='vidaMax' value={vida.Maxima} onChange={(e) => alterar(e)} autoComplete='off'/>
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
                         <input type='number' className='Numeros direita' name='sanidadeAtual' value={sanidade.Atual} onChange={(e) => alterar(e)} autoComplete='off'/>
                         <strong> / </strong>
                         <input type='number' className='Numeros' name='sanidadeMax' value={sanidade.Maxima} onChange={(e) => alterar(e)} autoComplete='off'/>
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
                            <input type='number' className='Numeros direita' name='manaAtual' value={mana.Atual} onChange={(e)=>alterar(e)} autoComplete='off'/>
                            <strong> / </strong>
                            <input type='number' className='Numeros' name='manaMax' value={mana.Maxima} onChange={(e)=>alterar(e)} autoComplete='off'/>
                        </div>
                    </div>

                <span id='PE'>Pontos de Esforço</span>
                  <div className='containerBarras'>
                    <progress max='120' className='barras' id='esforco'/>
                        <div>
                            <input type='number' className='Numeros direita' name='esforcoAtual' value={esforco.Atual} onChange={(e)=>alterar(e)} autoComplete='off'/>
                            <strong> / </strong>
                            <input type='number' className='Numeros' name='esforcoMax' value={esforco.Maxima} onChange={(e)=>alterar(e)} autoComplete='off'/>
                        </div>
                  </div>
            </div>
            
        </div>
    );
}

export default Barras