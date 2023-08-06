import React from "react";
import BurgerBtn from "./BurgerBtn";
import { OpenProps } from "../utils/interfaces";

const Navbar: React.FC<OpenProps> = ({ isOpen, handleClick, handleAncor }) => {
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
					<a href="#service" onClick={handleAncor}>
						Servicios
					</a>
				</li>

				<li className="nav-item">
					<a href="#galery" onClick={handleAncor}>
						Fotos
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

				<li className="nav-item" onClick={handleAncor}>
					<a href="#location">Ubicación</a>
				</li>
			</ul>

			<BurgerBtn isOpen={isOpen} handleClick={handleClick} />
		</nav>
	);
};

export default Navbar;
