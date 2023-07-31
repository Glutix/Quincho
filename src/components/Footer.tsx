import React from "react";
import whatsapp from "../assets/icons/whatsapp-icon.svg";
import instagram from "../assets/icons/instagram.svg";
import gmail from "../assets/icons/gmail.svg";
import mobile from "../assets/icons/mobile.svg";
import location from "../assets/icons/location.svg";
import facebook from "../assets/icons/facebook.svg";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer-info">
				<div className="footer-info-conteiner">
					<h2>
						Quincho <span>Alto Norte</span>
					</h2>
					<section className="footer-info-conteiner-1">
						<img src={location} alt="location-icon" />
						<p>
							Calle 51 entre 00 y 000 <span>Avenida los espaÑoles</span>
						</p>
					</section>
				</div>

				<div className="footer-info-conteiner">
					<h2>Seguinos en</h2>
					<section className="footer-info-conteiner-2">
						<img src={facebook} alt="facebook-icon" />
						<img src={instagram} alt="instagram-icon" />
					</section>
				</div>

				<div className="footer-info-conteiner aux">
					<h2>Contactanos</h2>

					<section className="footer-info-conteiner-3">
						<img src={whatsapp} alt="whatsapp-icon" />
						<p>3644-121212</p>
					</section>

					<section className="footer-info-conteiner-3">
						<img src={mobile} alt="whatsapp-icon" />
						<p>3644-121212</p>
					</section>

					<section className="footer-info-conteiner-3">
						<img src={gmail} alt="gmail-icon" />
						<p>pipi_poto@hotmail.com</p>
					</section>
				</div>
			</div>
			<p>Copyright 2023©</p>
		</footer>
	);
};

export default Footer;
