import React from "react";
import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import styled from "styled-components/macro";
import DateTime, { DateTimeProps } from "./DateTime";
import { BREAKPOINT_MOBILE } from "../../constants/constants";
import ActionButton from "./ActionButton";

const ConcertCardStyles = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 2em auto 0;
  width: 32em;

  .cardText {
    display: grid;
    grid-template-rows: 150px 80px;
  }

  img {
    width: inherit;
    height: auto;
    align-self: center;
  }

  .MuiCardActions-root {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 100vw;
  }
`;

export type ConcertProps = {
  imgPath: string;
  title: string;
  description?: string;
  timeDates?: DateTimeProps[];
};

export default ({ imgPath, title, description, timeDates }: ConcertProps) => {
  const lastConcertDate = timeDates?.[timeDates?.length - 1];
  const hasEventPassed = lastConcertDate
    ? new Date(lastConcertDate.date).getTime() < Date.now()
    : false;

  console.log("👀: lastConcertDate", lastConcertDate);
  if (lastConcertDate?.date) {
    console.log(
      "👀: new Date(lastConcertDate.date).getTime()",
      new Date(lastConcertDate?.date).getTime()
    );
  }

  return (
    <ConcertCardStyles>
      <img src={imgPath} alt={title} />
      <div className="cardText">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {timeDates?.map((dateTime) => (
              <DateTime {...dateTime} />
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <ActionButton link="" name="Read More" />
          {hasEventPassed ? (
            <ActionButton
              link=""
              name="This Event Has Passed"
              disabled={true}
            />
          ) : (
            <ActionButton link="" name="Buy Tickets" />
          )}
        </CardActions>
      </div>
    </ConcertCardStyles>
  );
};
