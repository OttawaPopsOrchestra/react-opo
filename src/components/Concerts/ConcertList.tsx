import React from "react";
import styled from "styled-components/macro";
import ConcertCard, {
  ConcertProps,
} from "../../components/Concerts/ConcertCard";
import { BREAKPOINT_MOBILE } from "../../constants/constants";
import Banner, { TITLE_HEIGHT } from "../Banner";
import { lighterGrey } from "../../constants/colors";

const ConcertsListStyles = styled.div`
  background-color: ${lighterGrey};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32em, 1fr));
  padding: ${TITLE_HEIGHT / 2}px 5em;
  grid-gap: 2em;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    grid-template-columns: auto;
    padding: 0em !important;
    grid-gap: 10px;
  }
`;

export default ({
  concerts,
  imgPath,
  title,
}: {
  concerts: ConcertProps[];
  imgPath: string;
  title: string;
}) => {
  return (
    <>
      <Banner imgPath={imgPath} title={title} />
      <ConcertsListStyles>
        {concerts.map((concert: ConcertProps) => {
          return <ConcertCard key={concert.title} {...concert} />;
        })}
      </ConcertsListStyles>
    </>
  );
};
