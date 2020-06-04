import React from "react";
import styled from "styled-components/macro";
import ConcertCard, {
  ConcertProps,
} from "../../components/Concerts/ConcertCard";

const ConcertsListStyles = styled.div`
  background-color: #f5f5f5;
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
