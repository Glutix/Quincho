const Contact: React.FC = () => {
  return (
    <div className="container" id="contact">
      <form className="form">
        <div className="title">Contactame</div>
        <input type="text" placeholder="Correo electrónico" className="input" />
        <textarea placeholder="Escribe tu mensaje..."></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
