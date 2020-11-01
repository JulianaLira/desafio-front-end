import React from 'react';

class Contato extends React.Component{
	render(){
		return(
            <div className="container-contatos">
                <div className="container-left">
                    <div className="contatos-left">
                        <h2>ENTRE EM CONTATO</h2>
                        <h3>Onde nos achar</h3>
                        <p>Rua dos Alfeneiros, número 4<br/>00-91102<br/>Little Whitning<br/>Londres/Inglaterra</p>
                        <br/>
                        <p>(21) 4004-1234<br/>(21) 4004-4321</p>
                        <br/>
                        <p>contato@minutonews.com.br</p>
                        <br/>
                        <p>Aberto de segunda a sexta das 09h as 19h</p>
                    </div>	
                </div>
                <div className="container-right">
                    <div className="contatos-right">
                        <h2>Mande uma mensagem</h2>
                        <form name="formulario" >
                            <label>
                                <p>Seu nome:</p>
                                <input type="text" name="nome" required  />
                            </label>

                            <label>
                                <p>Email:</p>
                                <input type="text" name="email" required  title="E-mail Inválido"/>
                            </label>

                            <p>Mensagem:</p>
                            <textarea rows="8" cols="100" ></textarea>
                            <center><button type="submit" className="btenviar">Enviar</button></center>
                        </form>
                    </div>
                </div>
             
	        </div>
           
		);
	}
}

export default Contato;