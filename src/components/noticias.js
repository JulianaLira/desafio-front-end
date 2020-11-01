import React from 'react';
//import sts from './public/noticias.json';
import OrdemFiltro from './ordemFiltro';
import EditoriasFiltro from './editoriasFiltro';
import CardNoticias from './cardNoticias';

//const json = require('../json/noticias.json');



class Noticias extends React.Component{
	
		// Object.values(json[0]['Editorias']).forEach((jn) => {
		// 	Object.values(jn).forEach((j) => {
		// 		Object.values(j).forEach((k) => {
					
		// 			if(json[0]['Editorias'][k] !== undefined){
		// 				//console.log(json[0]['Editorias'][k]);
		// 				return (
		// 				<CardNoticias
		// 					 key={json[0]['Editorias'][k]['Id'] }
		// 					 editoria={json[0]['Editorias'][k]['Editoria']  + 'kkkkk'}
		// 					 data={json[0]['Editorias'][k]['Notícias']['Data de publicação']}
		// 					 imagem= {json[0]['Editorias'][k]['Notícias']['Foto']}
		// 					 titulo={json[0]['Editorias'][k]['Notícias']['Título']}
		// 					 texto={json[0]['Editorias'][k]['Notícias']['Texto']}>
		// 				 </CardNoticias>);
		// 			}
		// 		})
		// 	})
		// })
	//}
	
	render(){
		return (
			<div className="container-full">	
				<div className="container-filtro">
							<EditoriasFiltro></EditoriasFiltro>
							<OrdemFiltro ></OrdemFiltro>
					
						</div>
					<div className="flex felx-wrap container-noticia">
						
						<CardNoticias
							editoria={'Esporte'}
							data={'06-01-2015'}
							imagem= {"noticias/3.jpg"}
							titulo={"Consumo de chocolate e depressão estão associados" }
							texto={"Sint dolor consequat occaecat non aliqua non adipisicing id. Lorem Lorem anim quis incididunt laboris consequat sunt id."}>
						</CardNoticias>
						<CardNoticias
							editoria={'Esporte'}
							data={'27-08-2020'}
							imagem= {"noticias/3.jpg"}
							titulo={"Objetos recriados em madeira" }
							texto={"Sint dolor consequat occaecat non aliqua non adipisicing id. Lorem Lorem anim quis incididunt laboris consequat sunt id."}>
						</CardNoticias>
						<CardNoticias
							editoria={'País'}
							data={'27-08-2020'}
							imagem= {"noticias/5.jpg"}
							titulo={"Produtos falsificados" }
							texto={"Sint dolor consequat occaecat non aliqua non adipisicing id. Lorem Lorem anim quis incididunt laboris consequat sunt id."}>
						</CardNoticias>
						<CardNoticias
							editoria={'Rio'}
							data={'05-04-2014'}
							imagem= {"noticias/2.jpg"}
							titulo={"O que acontece quando você junta design de móveis e tipografia?" }
							texto={"Sint dolor consequat occaecat non aliqua non adipisicing id. Lorem Lorem anim quis incididunt laboris consequat sunt id."}>
						</CardNoticias>
					</div>
					
				</div>
		)
			
			// <div className="container-full">	
			// 	<div className="container-filtro">
			// 		<EditoriasFiltro></EditoriasFiltro>
			// 		<OrdemFiltro ></OrdemFiltro> 					
			// 	</div>
			// 	<div className="flex felx-wrap container-noticia">

			// 	{Object.values(json[0]['Editorias']).map( jn => {
			// 		Object.values(jn).forEach(j => {
			// 			Object.values(j).map((k, i )=> {

			// 				if(json[0]['Editorias'][k] !== undefined){
			// 					return(<div key={i}>{json[0]['Editorias']}</div>)
			// 				}
			// 			});
			// 		});
			// 	})}

					/* { Object.values(json[0]['Editorias']).forEach((jn) => {
						Object.values(jn).forEach((j) => {
							Object.values(j).forEach((k) => {
								
								if(json[0]['Editorias'][k] !== undefined){
									//console.log(json[0]['Editorias'][k]);
									<CardNoticias
									 	key={json[0]['Editorias'][k]['Id'] }
									 	editoria={json[0]['Editorias'][k]['Editoria']  + 'kkkkk'}
									 	data={json[0]['Editorias'][k]['Notícias']['Data de publicação']}
									 	imagem= {json[0]['Editorias'][k]['Notícias']['Foto']}
									 	titulo={json[0]['Editorias'][k]['Notícias']['Título']}
									 	texto={json[0]['Editorias'][k]['Notícias']['Texto']}>
									 </CardNoticias>
								}
							})
						})
					})} */
		// 		</div>
		// 	</div>
		// );
	}
}

export default Noticias;