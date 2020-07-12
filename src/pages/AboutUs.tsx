import React from "react";
import styled from "styled-components/macro";
import { getCurrentLanguage } from "../components/TopBar/LanguageSelector";
import { BREAKPOINT_MOBILE } from "../constants/constants";

const AboutUsStyles = styled.div`
  .video-bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
  }

  .title {
    opacity: 1;
    color: white;
    font-size: 50px;

    padding-top: 8rem;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
  }

  .aboutBody {
    color: white;
    font-size: 30px;
    font-weight: 700;
    width: 75%;
    margin: 45rem auto 0;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    .aboutBody {
      font-size: 20px;
      padding-top: 50px;
    }
  }
`;

const englishTitle = "Learn about the Ottawa Pops Orchestra";

const englishText = [
  "The Ottawa Pops Orchestra is a community orchestra dedicated to programming orchestral pops repertoire in order to enrich and inspire the community through accessible, relevant, and passionate performances.",
  "Founded in the spring of 2017 by a collective of young musicians, Ottawa Pops Orchestra (OPO) strives to bridge classical orchestral repertoire with popular music, curating innovative concerts that redefine the orchestral experience for today’s audience. Under the joint direction of Matthew Larkin and Jonathan Dagenais, OPO strives to inspire, engage, and educate the greater Ottawa/Gatineau area.",
  "OPO is proud to announce two new educational initiatives for young musicians and students in the Ottawa-Gatineau Region. We are inviting local schools to some of our dress rehearsals and providing detailed educational resources for those shows to teachers, allowing students to experience a live orchestra in action. This season, we are also proud to offer the Orchestral Development Bursary, which provides the opportunity for young, talented musicians to refine their skill and gain professional orchestral experience with OPO.",
];

const frenchTitle = "Apprenez davantage sur l’Orchestre Pop d’Ottawa";

const frenchText = [
  "L’Orchestre Pop d’Ottawa est un orchestre communautaire dévoué à une programmation orchestrale avec un répertoire populaire qui vise à enrichir et inspirer la communauté avec des performances accessibles, passionnées et pertinentes.",
  "L’Orchestre Pop d’Ottawa (OPO) fut fondé au printemps de 2017 par un ensemble de jeunes musiciens. Leur mission est d’enrichir et d’inspirer la communauté en interprétant de la musique orchestrale qui dépasse les normes classiques et qui redéfinit l’expérience orchestrale pour le public d’aujourd’hui. Sous la direction de Matthew Larkin et de Jonathan Dagenais, l’OPO s’efforce d’inspirer, d’engager et d’éduquer la communauté d’Ottawa-Gatineau.",
  "L’OPO est fier de mettre sur pied deux nouvelles initiatives pour les jeunes musiciens et élèves de la région d’Ottawa-Gatineau. D’abord, nous invitions des écoles de la communauté à quelques-unes de nos répétitions générales en fournissant aux enseignants des ressources pédagogiques détaillées et reliées aux concerts, permettant aux élèves de témoigner du fonctionnement d’un orchestre. De plus, nous sommes fiers de présenter la Bourse de développement orchestral qui encourage certains jeunes musiciens, choisit par un panel d’audition, à perfectionner leurs habiletés musicales et acquérir de l’expérience orchestrale professionnelle avec l’OPO.",
];

export default () => {
  // Can't use translation files - doesn't work with jarallax effect
  const isFrench = getCurrentLanguage() === "fr";
  const aboutTitle = isFrench ? frenchTitle : englishTitle;
  const aboutText = isFrench ? frenchText : englishText;

  return (
    <AboutUsStyles>
      <div className="video-bg">
        <video autoPlay muted loop>
          <source src="./video/Blue_B_1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="title">{aboutTitle}</div>
      {aboutText.map((paragraph, index) => {
        return (
          <div
            key={index}
            className="aboutBody"
            // if last paragraph, add padding to bottom
            style={
              index === aboutText.length - 1
                ? { paddingBottom: "45rem" }
                : { paddingBottom: "0" }
            }
          >
            {paragraph}
          </div>
        );
      })}
    </AboutUsStyles>
  );
};
