import React from "react";
//? Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../Slider/data";

//? Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//? import required modules
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";

//? import interfaces
import { SlideProps } from "../../utils/interfaces";

const Slider: React.FC = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				keyboard={{
					enabled: true,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation, Keyboard, Autoplay]}
				className="slider-conteiner"
			>
				{images.map((item: SlideProps, index) => {
					return (
						<SwiperSlide
							key={index}
							className="slider"
							style={{ backgroundImage: `url(${item.url})` }}
						>
							<h2 className="slider-text">{item.title}</h2>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Slider;
