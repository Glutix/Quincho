import React from "react";
import fondo from "../assets/Fondo_Home.jpg";

const Home: React.FC = () => {
  return (
    <header className="fondo" style={{ backgroundImage: `url(${fondo})` }}>
      <section className="fondo-section">
        <div
          className="fondo-section-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <h2>Quincho</h2>
          <h2>Alto Norte</h2>
        </div>

        <div
          className="fondo-section-text"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
        >
          <p>
            Vení a disfrutar con la <span>familia</span>
          </p>
        </div>
      </section>
    </header>
  );
};

export default Home;
