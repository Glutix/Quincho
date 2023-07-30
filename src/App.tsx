//? Styles
import "./styles/index.scss";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";

const App = () => {
	return (
		<div className="app">
			<Home />
			<Slider />
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
