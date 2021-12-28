import React, { useEffect } from "react";
import { AboutContainer, SectionAboutStyled } from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";
import ImageAbout from "../../assets/image-about.jpg";

export const SectionAbout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <SectionAboutStyled id="about" data-aos="fade-up">
      <h2>Sobre mí</h2>

      <AboutContainer>
        <p>
          Hola! Soy Cecilia, soy desarrolladora web autodidacta, me encuentro en
          constante aprendizaje por medio de cursos y plataformas educativas. Mi
          curiosidad y pasión por aprender nuevas habilidades me ha llevado a
          interesarme al mundo del desarrollo. Mis proyectos se dedican a
          utilizar React pero en un futuro quisiera realizar proyectos móviles.
          Actualmente tengo conocimiento en <span>HTML</span>,<span>CSS</span> ,
          <span>Javascript</span> y <span>React</span>.
        </p>

        <figure>
          <img src={ImageAbout} alt="" />
        </figure>
      </AboutContainer>
    </SectionAboutStyled>
  );
};
