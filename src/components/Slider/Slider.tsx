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
		<div className="slider-conteiner" id="galery">
			<h2>Galeria de imagenes</h2>

			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className="mySwiper"
				data-aos="flip-left"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="2000"
			>
				{images.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<img src={`${item.url}`} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Slider;
