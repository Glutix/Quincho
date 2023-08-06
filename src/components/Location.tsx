import React from "react";

const Location: React.FC = () => {
	return (
		<div className="location" id="location">
			<h2>Ubicación</h2>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.3613145280506!2d-60.4492729255325!3d-26.764750287035984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94412c53bef3a7f3%3A0xb5121bd7a2cf24d!2sRepublica%20Italiana%202248%2C%20S%C3%A1enz%20Pe%C3%B1a%2C%20Chaco!5e0!3m2!1ses!2sar!4v1691275072937!5m2!1ses!2sar"
				width="100%"
				height="450px"
				style={{ border: "0" }}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};

export default Location;
