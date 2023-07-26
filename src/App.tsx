//? Styles
import "./styles/index.scss";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="">
			<Home />
			<About />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
