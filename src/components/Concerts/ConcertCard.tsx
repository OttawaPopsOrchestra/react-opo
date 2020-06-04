import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import styled from "styled-components/macro";

const ConcertCardStyles = styled(Card)`
  display: flex;
  margin: 2em auto 0;
  width: 90vw;

  .cardText {
    display: grid;
  }
`;

export type ConcertProps = {
  imgPath: string;
  title: string;
  description: string;
};

export default ({ imgPath, title, description }: ConcertProps) => {
  return (
    <ConcertCardStyles>
      <img src={imgPath} alt={title} />
      <div className="cardText">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
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
