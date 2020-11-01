import React from 'react';
import {Bar} from 'react-chartjs-2';
const state = {
    labels: ['Governo', 'Carnaval', 'Férias', 'Esporte', 'Outros'],
    datasets: [
      {
        label: 'Mais vistos',
        backgroundColor: [
            '#B22D30',
            '#111',
            '#111',
            '#111',
            '#111',
            '#111',      
            ],
        //borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [75, 50, 45, 30, 25]
      }
    ]
  }
class Grafico extends React.Component{


	render(){		
		return(
            <div className="container-chart">
                 
                <div className="charts">
                <h2>EDITORIAS MAIS ACESSADAS</h2>              
                   <Bar
                        data={state}
                        options={{
                            legend:{
                            display:false,
                            },
                            scales: {
                                xAxes:  [{
                                    gridLines:  {
                                     color: 'rgba(0,0,0,0)'
                                    }
                                }],  
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    },
                                  gridLines: {
                                      color: "rgba(0, 0, 0, 0)",
                                  }   
                              }]
                            },
                            chart:{
                                height: 50
                            }
                        }}
                        />
                  </div>
                  <div className="chart-txt">
                  <div className="texto-grafico-left">
                        <h3>Título Aqui</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                   </div>
                   <div className="texto-grafico-right">
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>			
                   </div>
                  </div>
                 
                
            </div>
		);
	}
}
export default Grafico;