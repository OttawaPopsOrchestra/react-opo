import React from "react";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE, FONT_SIZE_MEDIUM } from "../../constants/constants";
import { FONT_SIZE_LARGE } from "../../constants/constants";
// import ActionButtonMaroon from "../Buttons/ActionButtonMaroon";
// import { useTranslation } from "react-i18next";
import { ConcertProps } from "./ConcertCard";
// import { getDateObject, hasDatePassed } from "../../utils/dateTimeUtils";
import DateTime from "./DateTime";
// import { primaryMaroon } from "../../constants/colors";

const ConcertSingleStyles = styled.div`
  .title {
    text-align: center;
    padding: 1em 0;
    font-weight: 900;
    font-size: 50px;
  }

  .generalInfoBlock {
    display: flex;
    padding: 0 5em;

    .generalInfoGrid {
      display: grid;
      /* grid-template-columns: 50% 50%; */
      width: 40%;
    }

    img {
      max-width: 60%;
      width: 100%;
    }

    .generalInfo {
      background-color: black;
      color: white;
      padding: 3em 2em;

      .infoHeader {
        font-weight: 700;
        font-size: ${FONT_SIZE_LARGE}px;
      }

      .info {
        padding-bottom: 1em;
        font-size: ${FONT_SIZE_MEDIUM - 2}px;

        /* Override DateTime styles */
        div[class^="DateTime"] {
          justify-content: left !important;

          a {
            color: white !important;
          }
        }
      }
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    .title {
      font-size: ${FONT_SIZE_LARGE}px;
    }

    .generalInfoBlock {
      padding: 0 1em;
      flex-direction: column;

      img,
      .generalInfo {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`;

export default ({
  imgPath,
  title,
  description,
  timeDates,
  buyTickets,
}: ConcertProps) => {
  // const { t } = useTranslation("Concerts");
  // const cancelled = description?.includes(t("cancelled"));
  // let hasEventPassed = false;
  // if (!cancelled) {
  //   const lastConcertDateString = timeDates[timeDates.length - 1]?.date || "";
  //   const lastConcertDate = getDateObject(lastConcertDateString);
  //   hasEventPassed = hasDatePassed(lastConcertDate);
  // }

  // const disabled = hasEventPassed || cancelled;
  // const actionButtonTitle = cancelled
  //   ? t("cancelledShort")
  //   : hasEventPassed
  //   ? t("eventPassed")
  //   : t("buyTickets");

  return (
    <ConcertSingleStyles>
      <div className="title">{title}</div>
      <div className="generalInfoBlock">
        <img src={imgPath} alt={title} title={title} />
        <div className="generalInfoGrid">
          <div className="generalInfo">
            <div className="infoHeader">When</div>
            <div className="info">
              {" "}
              {timeDates?.map((dateTime) => (
                <DateTime key={dateTime.date} {...dateTime} />
              ))}
            </div>

            <div className="infoHeader">Location</div>
            <div className="info">datetime</div>

            <div className="infoHeader">Where</div>
            <div className="info">datetime</div>

            <div className="infoHeader">Language of the Event</div>
            <div className="info">datetime</div>

            <div className="infoHeader">Suggested Age</div>
            <div className="info">datetime</div>
          </div>
          {/* <div className="generalInfo">
            <ActionButtonMaroon
              link={buyTickets || ""}
              name={actionButtonTitle}
              disabled={disabled}
            />
          </div> */}
        </div>
      </div>
    </ConcertSingleStyles>
  );
};
