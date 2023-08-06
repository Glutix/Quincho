import React, { useState, useEffect } from "react";
import whatsApp from "../assets/icons/whatsapp-icon.svg";
import { OpenProps } from "../utils/interfaces";

const Whatsapp: React.FC<OpenProps> = ({ isOpen }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const wsp = window.scrollY || document.documentElement.scrollTop;
		const showBtn = wsp > 200;

		setIsVisible(showBtn);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="btn-whatsApp">
			<a
				href="https://wa.link/ioi7jj"
				target="_blank"
				className={`scroll-to-show ${isVisible && !isOpen ? "visible" : ""}`}
			>
				<img src={whatsApp} alt="icon-whatsApp" />
			</a>
		</div>
	);
};

export default Whatsapp;
