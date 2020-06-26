import React from 'react';

export default class Etapa2 extends React.Component{

render(){

return(

<div>
<h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
<p>5. Qual curso</p>
<input/>

<p>6. Qual a unidade de insino?</p>
<input/>

<br/>
<br/>
<button onClick={this.props.handleClickEtapa2}>Proxima estapa</button>
</div>

);
}
}