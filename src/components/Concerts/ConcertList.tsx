import React from "react";
import styled from "styled-components/macro";
import ConcertCard, {
  ConcertProps,
} from "../../components/Concerts/ConcertCard";
import { BREAKPOINT_MOBILE } from "../../constants/constants";
import Banner, { TITLE_HEIGHT } from "../Banner";

const ConcertsListStyles = styled.div`
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32em, 1fr));
  padding: ${TITLE_HEIGHT / 2}px 8em 0em;
  grid-gap: 2em;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    grid-template-columns: auto;
    padding: 0em !important;
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
