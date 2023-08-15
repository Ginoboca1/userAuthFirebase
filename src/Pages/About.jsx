import "../styles/About.css";

export const About = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contenedor-contacto">
          <h1>Contact me</h1>
          <div>
            <p>
              Mail <span>gnoboca@gmail.com</span>
            </p>
            <p>
              Phone <span>+54 341-665-6876</span>
            </p>
          </div>

          <div className="contenedor-contacto">
            <h1>Projects</h1>
            <div className="links-container">
              <a href="https://www.linkedin.com/in/gino-bocacorsicopicolino-7b983121b/">
                LinkedIn profile
              </a>
              <a href="https://github.com/Ginoboca1?tab=repositories">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
