import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import styled from "styled-components/macro";
import DateTime, { DateTimeProps } from "./DateTime";
import { BREAKPOINT_MOBILE } from "../../constants/constants";

const ConcertCardStyles = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 2em auto 0;
  width: 32em;

  .cardText {
    display: grid;
  }

  img {
    width: inherit;
    height: auto;
    align-self: center;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 30em;
  }
`;

export type ConcertProps = {
  imgPath: string;
  title: string;
  description?: string;
  timeDates?: DateTimeProps[];
};

export default ({ imgPath, title, description, timeDates }: ConcertProps) => {
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
          <Button size="small" color="primary">
            Read More
          </Button>
          <Button size="small" color="primary">
            Buy Tickets
          </Button>
        </CardActions>
      </div>
    </ConcertCardStyles>
  );
};
