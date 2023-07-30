import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import images from "./data";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Slider: React.FC = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

	return (
		<div className="slider-conteiner">
			<h2>Galeria de imagenes</h2>

			<Swiper
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2"
			>
				{images.map((item) => {
					return (
						<SwiperSlide>
							<img src={`${item.url}`} />
						</SwiperSlide>
					);
				})}
			</Swiper>

			<Swiper
				//onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
			>
				{images.map((item) => {
					return (
						<SwiperSlide>
							<img src={`${item.url}`} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Slider;
