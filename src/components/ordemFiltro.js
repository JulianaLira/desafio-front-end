import React from 'react';

class OrdemFiltro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 'DATA'};
    
        this.handleChange = this.handleChange.bind(this);

      }
    
      //pega o valor de quando a opção é selecionada
      handleChange(event) {
        this.setState({value: event.target.value});

        console.log({value: event.target.value});
      }
	// todasAsNoticias = data[1];
	
	render(){		
		return(
            <div className="">
                <h2>EDITORIAIS</h2>
               <div className="select-filtro">
                <p>Ordenar por:</p>
                <select width="150px"  value={this.state.value} onChange={this.handleChange}>
                    <option value="data">DATA</option>
                    <option value="alfabetico">ALFABÉTICO</option>
                </select>
                </div>
            </div>
		);
	}
}
export default OrdemFiltro;