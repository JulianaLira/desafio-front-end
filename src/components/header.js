import React from 'react';

import logo from './../assets/logo.png';


class Header extends React.Component{
	render(){
		return( 
			<header>
               <nav className="container">	
					 <img className="img-logo"  src={logo} alt="Minha Figura" />	 
					<div className="menu-list">
					<ul>
							<li className="menu-title" ><a href="/#" >Início</a></li>
							<li>
								<a href="/#" className="seta-baixo">Brasil</a>
								<ul className="sub-menu-list">
									<li><a href="/#">Submenu 01</a></li>
									<li><a href="/#">Submenu 02</a></li>
									<li><a href="/#">Submenu 03</a></li>
									<li><a href="/#">Submenu 04</a></li> 
									<li><a href="/#">Submenu 05</a></li>			
								</ul>
							</li>
							<li><a href="/#">Mundo</a></li>
							<li><a href="/#">Blogs</a></li>
							<li><a href="/#">Assine</a></li>
						</ul>
					</div>
					
				</nav>
			</header>
		);
	}
}

export default Header;