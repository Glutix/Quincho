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
						<h2>Quincho</h2>
						<h2>Alto Norte</h2>
					</div>

					<div className="fondo-section-text">
						<p>Vení a disfrutar con la familia</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
