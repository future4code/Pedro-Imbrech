import React from 'react';

export default class Etapas extends React.Component{


render(){
return(
<div>
<h1>ETAPA 1-DADOS GERAIS</h1>
<p>1. Qual o sua nome?</p>
<input />

<p>2. Qual sua idade?</p>
 <input/>

 <p>3. Qual a sua email?</p>
 <input/>
 <br/>
 <br/>
 <select>

 <p>4. Qual a sua escolaridade?</p>
<option >Ensino médio incompleto</option>
<option >Ensino médio completo</option>
<option >Ensino superior incompleto</option>
<option >Ensino superior completo</option>
</select>


 
 <br/>
 <br/>
 <button onClick={this.props.handleClickEtapas}>Proxima estapa</button>
</div>


);
}
}

