import React from "react";

const Navbar: React.FC = () => {
	return (
		<nav className="nav">
			<h2 className="nav-logo">Alto Norte</h2>
			<ul className="nav-list">
				<li className="nav-item">
					<a href="#">Inicio</a>
				</li>

				<li className="nav-item">
					<a href="#">Nosotros</a>
				</li>

				<li className="nav-item">
					<a href="#">Contacto</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
