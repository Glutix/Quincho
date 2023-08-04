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
							Calle 000 y 61 <span>Alto del norte</span>
						</p>
					</section>
				</div>

				<div className="footer-info-conteiner">
					<h2>Seguinos en</h2>
					<section className="footer-info-conteiner-2">
						<a
							href="https://www.facebook.com/profile.php?id=100087569863426"
							target="_blank"
						>
							<img src={facebook} alt="facebook-icon" />
						</a>
						<a href="https://www.instagram.com/alto_del_norte/" target="_blank">
							<img src={instagram} alt="instagram-icon" />
						</a>
					</section>
				</div>

				<div className="footer-info-conteiner aux">
					<h2>Contactanos</h2>

					<section className="footer-info-conteiner-3">
						<img src={whatsapp} alt="whatsapp-icon" />
						<p>3644-608772</p>
					</section>

					<section className="footer-info-conteiner-3">
						<img src={mobile} alt="whatsapp-icon" />
						<p>3644-608772</p>
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
