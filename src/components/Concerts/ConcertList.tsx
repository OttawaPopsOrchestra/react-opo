import React from "react";
import styled from "styled-components/macro";
import ConcertCard, {
  ConcertProps,
} from "../../components/Concerts/ConcertCard";
import { BREAKPOINT_MOBILE } from "../../constants/constants";
import Banner, { TITLE_HEIGHT } from "../Banner";
import { lighterGrey } from "../../constants/colors";
import { getDateObject, hasDatePassed } from "../../utils/dateTimeUtils";

const ConcertsListStyles = styled.div`
  background-color: ${lighterGrey};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32em, 1fr));
  padding: ${TITLE_HEIGHT / 2}px 5em;
  grid-gap: 2em;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    grid-template-columns: auto;
    padding: 0em 0em 2em !important;
    grid-gap: 10px;
  }
`;

export default function ConcertList({
  concerts,
  imgPath,
  title,
}: {
  concerts: ConcertProps[];
  imgPath: string;
  title: string;
}) {
  const sortedConcerts = orderConcerts(concerts);

  return (
    <>
      <Banner imgPath={imgPath} title={title} />
      <ConcertsListStyles>
        {sortedConcerts.map((concert: ConcertProps) => {
          return <ConcertCard key={concert.title} {...concert} />;
        })}
      </ConcertsListStyles>
    </>
  );
}

function orderConcerts(concerts: ConcertProps[]): ConcertProps[] {
  let passedConcerts = [] as ConcertProps[];
  let futureConcerts = [] as ConcertProps[];

  concerts.forEach((concert) => {
    const lastConcertDateString =
      concert.timeDates[concert.timeDates.length - 1]?.date || "";
    const lastConcertDate = getDateObject(lastConcertDateString);
    const hasEventPassed = hasDatePassed(lastConcertDate);
    hasEventPassed
      ? passedConcerts.push(concert)
      : futureConcerts.push(concert);
  });

  const sortByDate = (a, b) => {
    const dateA = getDateObject(a.timeDates?.[0].date);
    const dateB = getDateObject(b.timeDates?.[0].date);

    return dateA.getTime() - dateB.getTime();
  };

  const sortedPassedConcerts = passedConcerts.sort(sortByDate);
  const sortedFutureConcerts = futureConcerts.sort(sortByDate);

  return sortedFutureConcerts.concat(sortedPassedConcerts);
}
