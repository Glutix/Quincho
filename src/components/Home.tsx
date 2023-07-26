import React from "react";
import Navbar from "./Navbar";
import fondo from "../assets/Fondo_Home.jpg";

const Home: React.FC = () => {
	return (
		<div>
			<Navbar />
			<div className="fondo" style={{ backgroundImage: `url(${fondo})` }}>
				<section className="fondo-section">
					<div className="fondo-section-title">
						<h2>Quincho norte</h2>
						<h2>Alto Norte</h2>
					</div>
					<h3 className="fondo-section-text">Veni a difrutar con la familia</h3>
				</section>
			</div>
		</div>
	);
};

export default Home;
