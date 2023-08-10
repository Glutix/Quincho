import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

const TimeLine: React.FC = () => {
	return (
		<section className="time-line" id="service">
			<h2 className="title-principal">Servicios</h2>
			<VerticalTimeline animate={false} lineColor={"#2ba8fb"}>
				{/* <div className="conteiner-card" data-aos="fade-right">
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						iconStyle={{
							backgroundImage:
								"url(https://www.elmundofinanciero.com/fotos/434/73FFGR.jpg)",
							color: "#fff",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center",
							backgroundSize: "cover",
						}}
						contentArrowStyle={{
							borderRight: "15px solid white",
						}}
						position="left"
					>
						<div className="time-line-card">
							<h2 className="title">Sonido</h2>
							<img
								src="https://www.elmundofinanciero.com/fotos/434/73FFGR.jpg"
								alt="sonido-image"
							/>
							<p>
								¡Potencia tus eventos con nuestra experiencia auditiva de élite!
								🎶 Descubre un equipo de sonido excepcional: potencia, claridad
								y versatilidad en uno solo. ¡Eleva tus eventos al máximo nivel
								con nuestro sonido de primera categoría! 🚀
							</p>
						</div>
					</VerticalTimelineElement>
				</div> */}

				<div className="conteiner-card" data-aos="fade-left">
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						iconStyle={{
							backgroundImage:
								"url(https://www.elesquiu.com/u/fotografias/m/2023/6/18/f608x342-472167_501890_0.jpg)",
							color: "#fff",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center",
							backgroundSize: "cover",
						}}
						contentArrowStyle={{
							borderRight: "15px solid white",
						}}
						position="right"
					>
						<div className="time-line-card">
							<h2 className="title">Parilla</h2>
							<img
								src="https://www.elesquiu.com/u/fotografias/m/2023/6/18/f608x342-472167_501890_0.jpg"
								alt="parrilla-image"
							/>
							<p>
								¡Tu asado merece lo mejor! 🔥 Descubre nuestra parrilla para una
								experiencia culinaria incomparable. Duradera, versátil y
								diseñada para realzar cada sabor. ¡Eleva tus asados al siguiente
								nivel con nuestra parrilla de alta calidad! 🍖🥩
							</p>
						</div>
					</VerticalTimelineElement>
				</div>

				<div className="conteiner-card" data-aos="fade-right">
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						iconStyle={{
							backgroundImage: "url(https://i.imgur.com/TcVqXPp.jpg)",
							color: "#fff",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center",
							backgroundSize: "cover",
						}}
						contentArrowStyle={{
							borderRight: "15px solid white",
						}}
					>
						<div className="time-line-card">
							<h2 className="title">Pileta</h2>
							<img
								src="https://i.imgur.com/TcVqXPp.jpg"
								alt="una-hermosa-pileta"
							/>
							<p>
								¡Sumérgete en el lujo y la diversión! 💦 Nuestra piscina es un
								oasis de relajación y momentos inolvidables. ¡Disfruta del agua
								al máximo! 🏊‍♂️
							</p>
						</div>
					</VerticalTimelineElement>
				</div>
			</VerticalTimeline>
		</section>
	);
};

export default TimeLine;
