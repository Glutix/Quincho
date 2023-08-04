import React, { useState } from "react";
import BurgerBtn from "./BurgerBtn";

const Navbar: React.FC = () => {
	const [visible, setVisible] = useState<Boolean>(false);

	return (
		<nav className="nav">
			<h2 className="nav-logo">Alto Norte</h2>
			<ul className="nav-list">
				<li className="nav-item">
					<a href="#">Inicio</a>
				</li>

				<li className="nav-item">
					<a href="#about">Nosotros</a>
				</li>

				<li className="nav-item">
					<a href="#galery">Fotos</a>
				</li>

				<li className="nav-item">
					<a href="#contact">Contacto</a>
				</li>
			</ul>

			<BurgerBtn isVisible={visible}/>
		</nav>
	);
};

export default Navbar;
