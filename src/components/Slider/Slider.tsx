import React from "react";
//? Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//? Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import images from "./data";

//? import required modules
import { EffectCards } from "swiper/modules";

const Slider: React.FC = () => {
	return (
		<section className="slider-conteiner" id="galery">
			<h2>Galeria de imagenes</h2>

			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
			>
				{images.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<img src={`${item.url}`} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Slider;
