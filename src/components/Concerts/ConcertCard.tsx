import React from "react";
import { Card, CardContent, CardActions } from "@material-ui/core";
import styled from "styled-components/macro";
import DateTime, { DateTimeProps } from "./DateTime";
import {
  BREAKPOINT_MOBILE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
} from "../../constants/constants";
import ActionButton from "../Buttons/ActionButton";
import { useTranslation } from "react-i18next";
import { hasDatePassed, getDateObject } from "../../utils/dateTimeUtils";

const ConcertCardStyles = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 2em auto 0;
  width: 32em;

  .title {
    position: relative;
    left: 50%;
    transform: translate(-50%, -100%);
    color: white;
    background-color: black;
    height: ${FONT_SIZE_MEDIUM * 2}px;
    width: 80%;
    text-align: center;
    font-size: ${FONT_SIZE_MEDIUM}px;
    font-weight: 700;
    line-height: ${FONT_SIZE_MEDIUM * 2}px;
  }

  .description {
    color: grey;
    font-size: ${FONT_SIZE_SMALL + 2}px;
    text-align: center;
  }

  .cardText {
    display: grid;
    grid-template-rows: 150px 80px;
  }

  img {
    width: inherit;
    height: auto;
    align-self: center;
    border-bottom: 8px black solid;
  }

  .MuiCardActions-root {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 100vw;

    .title {
      height: ${FONT_SIZE_SMALL * 2}px;
      font-size: ${FONT_SIZE_SMALL}px;
      line-height: ${FONT_SIZE_SMALL * 2}px;
    }

    img {
      border-bottom: 5px black solid;
    }

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
  timeDates: DateTimeProps[];
  buyTickets?: string;
  readMore?: string;
  location?: string;
  language?: string;
  age?: string;
};

export default ({
  imgPath,
  title,
  description,
  timeDates,
  buyTickets,
  readMore,
}: ConcertProps) => {
  const { t } = useTranslation("Concerts");

  const cancelled = description?.includes(t("cancelled"));
  let hasEventPassed = false;
  if (!cancelled) {
    const lastConcertDateString = timeDates[timeDates.length - 1]?.date || "";
    const lastConcertDate = getDateObject(lastConcertDateString);
    hasEventPassed = hasDatePassed(lastConcertDate);
  }

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
          <div className="title">{title}</div>
          <div className="description">
            {description}
            {timeDates?.map((dateTime) => (
              <DateTime key={dateTime.date} {...dateTime} />
            ))}
          </div>
        </CardContent>
        <CardActions>
          <ActionButton link={readMore || ""} name={t("readMore")} />
          <ActionButton
            link={buyTickets || ""}
            name={actionButtonTitle}
            disabled={disabled}
          />
        </CardActions>
      </div>
    </ConcertCardStyles>
  );
};
