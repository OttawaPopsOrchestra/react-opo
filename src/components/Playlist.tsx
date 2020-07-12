import React from "react";
import styled from "styled-components/macro";

const StyledIframe = styled.div`
  iframe {
    border: 0;
    width: 100%;
    height: 380px;
    padding: 1em 0 2em;
  }
`;

export default ({ link }) => {
  return (
    <StyledIframe>
      <iframe
        title="playlist"
        src={link}
        allow="autoplay; encrypted-media"
      ></iframe>
    </StyledIframe>
  );
};
