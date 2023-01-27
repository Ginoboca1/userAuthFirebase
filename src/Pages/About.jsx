import "../styles/About.css";

export const About = () => {
  return (
    <div className="container">
      <h1>Contact</h1>
      <div className="contenedor-contacto">
      <div>
        <p>Mail <span>gnoboca@gmail.com</span></p>
        <p>Phone <span>+54 341-665-6876</span></p>
      </div>

        <div className="mailme">
          <h1>Projects</h1>
          <a href="https://www.linkedin.com/in/gino-bocacorsicopicolino-7b983121b/">
            <h4>LinkedIn profile</h4>
          </a>
          <a href="https://github.com/Ginoboca1?tab=repositories">
            <h4>GitHub Repository</h4>
          </a>
        </div>
      </div>
    </div>
  );
};
