//? Styles
import "./styles/index.scss";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";
import TimeLine from "./components/TimeLine";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	duration: 1000,
});

const App = () => {
	return (
		<div className="app">
			<Home />
			<ScrollToTop />
			<TimeLine />
			<Slider />
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
