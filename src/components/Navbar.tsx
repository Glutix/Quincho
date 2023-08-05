import React, { useState } from "react";
import BurgerBtn from "./BurgerBtn";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	document.body.style.overflow = !isOpen ? "auto" : "hidden";

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleAncor = () => {
		setIsOpen(false);
	};

	return (
		<nav className="nav">
			<h2 className="nav-logo">Alto Norte</h2>
			<ul className={`nav-list ${isOpen && "nav-list-open"}`}>
				<li className="nav-item">
					<a href="#" onClick={handleAncor}>
						Inicio
					</a>
				</li>

				<li className="nav-item">
					<a href="#galery" onClick={handleAncor}>
						Fotos
					</a>
				</li>

				<li className="nav-item">
					<a href="#service" onClick={handleAncor}>
						Servicios
					</a>
				</li>

				<li className="nav-item">
					<a href="#about" onClick={handleAncor}>
						Nosotros
					</a>
				</li>
				<li className="nav-item" onClick={handleAncor}>
					<a href="#contact">Contacto</a>
				</li>
			</ul>

			<BurgerBtn isOpen={isOpen} handleClick={handleClick} />
		</nav>
	);
};

export default Navbar;
