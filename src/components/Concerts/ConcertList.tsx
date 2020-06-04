import React from "react";
import styled from "styled-components/macro";
import ConcertCard, {
  ConcertProps,
} from "../../components/Concerts/ConcertCard";
import { BREAKPOINT_MOBILE } from "../../constants/constants";

const ConcertsListStyles = styled.div`
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32em, 1fr));
  padding: 0em 8em;
  grid-gap: 2em;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    /* grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); */
    padding: 0em !important;
    width: 32em;
  }
`;

export default ({ concerts }: { concerts: ConcertProps[] }) => {
  return (
    <ConcertsListStyles>
      {concerts.map((concert: ConcertProps) => {
        return <ConcertCard key={concert.title} {...concert} />;
      })}
    </ConcertsListStyles>
  );
};
