import React from "react";
import EventIcon from "@material-ui/icons/Event";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import styled from "styled-components/macro";

export type DateTimeProps = {
  date: string;
  time: string;
};

const DateTimeStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  .iconWithString {
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      padding-right: 5px;
    }
  }
`;

export default ({ date, time }: DateTimeProps) => {
  return (
    <DateTimeStyles>
      <div className="iconWithString">
        <EventIcon />
        {date}
      </div>
      <div className="iconWithString">
        <AccessTimeIcon />
        {time}
      </div>
    </DateTimeStyles>
  );
};
