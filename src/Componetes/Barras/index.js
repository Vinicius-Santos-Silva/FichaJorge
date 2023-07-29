


import './index.css'


function Barras(){
    return(
        <div id="CaixaBarras">
            <div>

                <span>Vida</span>
                <div className='containerBarras'>
                  <progress max='120' className='barras' id='vida'/>
                    <div>
                        <input type='number' className='Numeros direita' value='151' onChange='' autoComplete='off'/>
                        <strong> / </strong>
                        <input type='number' className='Numeros' value='152' onChange='' autoComplete='off'/>
                    </div>
                </div>
                        <div className='estado'>
                            <input type='checkbox' name='lesãoGrave'/> <label>Lesão Grave</label>
                            <input type='checkbox' name='inconsciente'/> <label>Inconsciente</label>
                            <input type='checkbox' name='morrendo'/> <label>Morrendo</label>
                        </div>

                <span>Sanidade</span>
                  <div className='containerBarras'>
                    <progress max='120' className='barras' id='sanidade'/>
                        <div>
                         <input type='number' className='Numeros direita' value='73' onChange='' autoComplete='off'/>
                         <strong> / </strong>
                         <input type='number' className='Numeros' value='75' onChange='' autoComplete='off'/>
                        </div>
                  </div>
                        <div className='estado'>
                            <input type='checkbox' name='traumatizado'/> <label>Traumatizado</label>
                            <input type='checkbox' name='enloquecido'/> <label>Enloquecido</label>
                        </div>

                <span>Mana</span>
                  <div className='containerBarras'>
                    <progress max='120' className='barras' id='mana'/>
                        <div>
                            <input type='number' className='Numeros direita' value='33' onChange='' autoComplete='off'/>
                            <strong> / </strong>
                            <input type='number' className='Numeros' value='33' onChange='' autoComplete='off'/>
                        </div>
                    </div>

                <span>Pontos de Esforço</span>
                  <div className='containerBarras'>
                    <progress max='120' className='barras' id='esforco'/>
                        <div>
                            <input type='number' className='Numeros direita' value='42' onChange='' autoComplete='off'/>
                            <strong> / </strong>
                            <input type='number' className='Numeros' value='42' onChange='' autoComplete='off'/>
                        </div>
                  </div>
            </div>
            
        </div>
    );
}

export default Barras