import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "styled-components/macro";
import { primaryMaroon } from "../../constants/colors";

export type DateTimeProps = {
  date: string;
  time: string;
  ticketLink?: string;
};

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
    color: ${primaryMaroon} !important;
  }

  .iconWithString {
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      padding-right: 5px;
    }
  }
`;
