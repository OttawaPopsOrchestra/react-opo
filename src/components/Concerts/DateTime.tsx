import React from "react";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import styled from "styled-components/macro";
import { primaryMaroon } from "../../constants/colors";

export type DateTimeProps = {
  date: string;
  time: string;
  ticketLink?: string;
};

const DateTimeStyles = styled.div`
  display: flex;
  padding-bottom: 2px;
  justify-content: center;

  .date {
    padding-right: 1em;
  }

  a {
    display: grid;
    grid-template-columns: auto auto;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.54);
  }

  a:hover {
    color: ${primaryMaroon};
  }

  .iconWithString {
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      padding-right: 5px;
    }
  }
`;

export default function DateTime({ date, time, ticketLink }: DateTimeProps) {
  const DateAndTime = () => {
    return (
      <>
        <div className="iconWithString date">
          <EventIcon />
          {date}
        </div>
        <div className="iconWithString">
          <AccessTimeIcon />
          {time}
        </div>
      </>
    );
  };

  return (
    <DateTimeStyles>
      {ticketLink ? (
        <a href={ticketLink} target="_blank" rel="noopener noreferrer">
          <DateAndTime />
        </a>
      ) : (
        <DateAndTime />
      )}
    </DateTimeStyles>
  );
}
