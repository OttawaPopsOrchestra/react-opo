import React from "react";
import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import styled from "styled-components/macro";
import DateTime, { DateTimeProps } from "./DateTime";
import { BREAKPOINT_MOBILE } from "../../constants/constants";
import ActionButton from "./ActionButton";
import { useTranslation } from "react-i18next";
import { getCurrentLanguage } from "../Navbar/LanguageSelector";
import { concertFrenchStrToDate } from "../../utils/dateTimeUtils";

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

    .cardText {
      grid-template-rows: 150px 120px;
    }

    .MuiCardActions-root {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-row-gap: 10px;
    }

    /* disable auto left padding when next action button */
    .MuiCardActions-spacing > :not(:first-child) {
      margin-left: 0px;
    }
  }
`;

export type ConcertProps = {
  imgPath: string;
  title: string;
  description?: string;
  timeDates?: DateTimeProps[];
};

export default ({ imgPath, title, description, timeDates }: ConcertProps) => {
  const { t } = useTranslation("Concerts");

  const isFrench = getCurrentLanguage() === "fr";
  const lastConcertDate = timeDates?.[timeDates?.length - 1];
  const lastConcertDateString = isFrench
    ? concertFrenchStrToDate(lastConcertDate?.date || "")
    : lastConcertDate?.date || "";
  console.log("👀: lastConcertDateString", lastConcertDateString);
  const hasEventPassed = lastConcertDateString
    ? new Date(lastConcertDateString).getTime() < Date.now()
    : false;

  if (lastConcertDate) {
    console.log("👀: lastConcertDate", lastConcertDate);
    console.log(
      "👀: new Date(lastConcertDate.date).getTime()",
      new Date(lastConcertDate.date).getTime()
    );
  }

  const cancelled = description?.includes(t("cancelled"));
  const disabled = hasEventPassed || cancelled;
  const actionButtonTitle = cancelled
    ? t("cancelledShort")
    : hasEventPassed
    ? t("eventPassed")
    : t("buyTickets");

  return (
    <ConcertCardStyles elevation={5}>
      <img src={imgPath} alt={title} />
      <div className="cardText">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="h6" component={"span"} color="textSecondary">
            {timeDates?.map((dateTime) => (
              <DateTime key={dateTime.date} {...dateTime} />
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          <ActionButton link="" name={t("readMore")} />
          <ActionButton link="" name={actionButtonTitle} disabled={disabled} />
        </CardActions>
      </div>
    </ConcertCardStyles>
  );
};
