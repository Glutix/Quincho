import React from "react";

const About: React.FC = () => {
	return (
		<section className="about" id="about">
			<h2>Sobre nosotros</h2>

			<img
				src="https://media.istockphoto.com/id/1299271420/es/vector/elemento-de-dise%C3%B1o-familiar.jpg?s=612x612&w=0&k=20&c=ABRkZn9J26k0nsMDGphsZOiSmZ73GNaO57xRyvAzQGk="
				alt="image-famaly_happy"
				data-aos="fade-zoom-in"
				data-aos-easing="ease-in-back"
				data-aos-delay="100"
				data-aos-offset="50"
			/>
			<p
				className="about-text"
				data-aos="fade-zoom-in"
				data-aos-easing="ease-in-back"
				data-aos-delay="100"
				data-aos-offset="50"
			>
				¡Bienvenidos a <strong>Quincho Alto Norte!</strong> 😄 Somos el destino
				perfecto para tus encuentros y celebraciones familiares. Con 2 años de
				experiencia, te brindamos un encantador quincho rodeado de naturaleza
				🌳🏞️ y un ambiente acogedor. Nuestras instalaciones están equipadas con
				parrilla, piscina 🍔🏊‍♂️, baños y espacios de relajación. Nos enorgullece
				ser parte de tus momentos especiales. ¡Reserva tu fecha y crea recuerdos
				inolvidables con nosotros! 📅🎉
			</p>
		</section>
	);
};

export default About;
