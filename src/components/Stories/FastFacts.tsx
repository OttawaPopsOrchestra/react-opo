import React from "react";
import styled from "styled-components/macro";
import { FONT_SIZE_SMALL, FONT_SIZE_MEDIUM } from "../../constants/constants";

const FastFactStyles = styled.div`
  background-color: rgba(106, 102, 164, 0.2);
  padding: 2em 2em 1em;
  border-radius: 25px;
  width: 80%;
  margin: 2em auto;
  box-shadow: 15px 15px rgba(191, 191, 191, 0.8);

  .fastFactsTitle {
    font-weight: 700;
    text-align: center;
    font-size: ${FONT_SIZE_MEDIUM - 4}px;
  }

  li {
    font-size: ${FONT_SIZE_SMALL - 2}px;
    padding-bottom: 0.5em;
  }
`;

export default function FastFacts({
  title,
  facts,
}: {
  title: string;
  facts: string[];
}) {
  return (
    <FastFactStyles>
      <div className="fastFactsTitle">{title}</div>
      <ul>
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </FastFactStyles>
  );
}
