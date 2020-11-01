import React from 'react';

class CardNoticias extends React.Component{
	// todasAsNoticias = data[1];
	
	render(){		
		return(
           
                <div className="card-editoriais">
                    <div className="container-card">
                        <div className="card-data">
                            <p>{this.props.data}</p>
                        </div>
                        <div className="card-editoria">
                            <h4>{this.props.editoria}</h4>
                        </div>
                        <img className="card-img" src={this.props.imagem} alt="card"/>
                        <div className="card-titulo">
                            <h3>{this.props.titulo}</h3>
                        </div>
                        <div className="card-texto">
                            <p>{this.props.texto}</p>
                        </div>
                        <a href="/">
                            <h5>Saiba Mais</h5>
                        </a>
                    </div> 
                </div>
           
		);
	}
}
export default CardNoticias;