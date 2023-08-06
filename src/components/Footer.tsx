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

					<a
						href="https://goo.gl/maps/VeifdiprpmmXs5hy7"
						target="_blank"
						className="section-1"
					>
						<img src={location} alt="location-icon" />
						<p>
							Calle 000 y 61 <span>Alto del norte</span>
						</p>
					</a>
				</div>

				<div className="footer-info-conteiner">
					<h2>Seguinos en</h2>
					<section className="section-2">
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

				<div className="footer-info-conteiner">
					<h2>Contactanos</h2>

					<section className="section-3">
						<div>
							<img src={whatsapp} alt="whatsapp-icon" />
							<p>3644-608772</p>
						</div>

						<div>
							<img src={mobile} alt="whatsapp-icon" />
							<p>3644-608772</p>
						</div>

						<div>
							<img src={gmail} alt="gmail-icon" />
							<p>quincho.alto.norte@gmail.com</p>
						</div>
					</section>
				</div>
			</div>
			<p>&copy; 2023 Quincho Alto Norte. Todos los derechos reservados.</p>
		</footer>
	);
};

export default Footer;
