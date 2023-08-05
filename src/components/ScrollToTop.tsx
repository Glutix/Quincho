import React, { useState, useEffect } from "react";
import arrow from "../assets/icons/arrow-scroll.svg";

const ScrollToTop: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const shouldShowButton = scrollTop > 200;

		setIsVisible(shouldShowButton);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="scroll-conteiner">
			<button
				className={`scroll-to-top ${isVisible ? "visible" : ""}`}
				onClick={scrollToTop}
			>
				<img src={arrow} alt="icon-arrow" />
			</button>
		</div>
	);
};

export default ScrollToTop;
