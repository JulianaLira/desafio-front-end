import React from 'react';

class EditoriaisFiltro extends React.Component{
	// todasAsNoticias = data[1];
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
                 <div className="select-filtro">
                    <p>Filtrar por:</p>
                    <select width="130px"  value={this.state.value} onChange={this.handleChange}>
                        <option value="all">TODOS</option>
                        <option value="esporte">ESPORTE</option>
                        <option value="pais">PAIS</option>
                        <option value="rio">RIO</option>
                        <option value="cultura">CULTURA</option>
                        <option value="internacional">INTERNACIONAL</option>
                    </select>
                </div>
               
            </div>
		);
	}
}
export default EditoriaisFiltro;