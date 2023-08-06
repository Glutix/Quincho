//? Utils
import AOS from "aos";
import { useState } from "react";

//? Styles
import "./styles/index.scss";
import "aos/dist/aos.css";

//? COmponmentes
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import TimeLine from "./components/TimeLine";
import ScrollToTop from "./components/ScrollToTop";
import Location from "./components/Location";
import Whatsapp from "./components/Whatsapp";
import Navbar from "./components/Navbar";

//? seting
AOS.init({
	duration: 1000,
});

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	document.body.style.overflow = !isOpen ? "auto" : "hidden";

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleAncor = () => {
		setIsOpen(false);
	};

	return (
		<div className="app">
			<Navbar
				isOpen={isOpen}
				handleClick={handleClick}
				handleAncor={handleAncor}
			/>
			<Home />
			<ScrollToTop isOpen={isOpen} handleClick={handleClick} />
			<Whatsapp isOpen={isOpen} handleClick={handleClick} />
			<TimeLine />
			<Slider />
			<About />
			<Contact />
			<Location />
			<Footer />
		</div>
	);
};

export default App;
