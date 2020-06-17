import React from "react";
import styled from "styled-components/macro";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const ShareButtonStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  button {
    background-color: transparent;
    border: none;
    circle {
      fill: black;
      stroke: white;
      stroke-width: 2px;
    }

    path {
      fill: white;
    }
  }

  button:hover {
    background-color: transparent;
    border: none;
    circle {
      fill: white;
    }

    path {
      fill: black;
    }
  }
  button:focus {
    outline: none;
  }
`;

export default ({ url, size }: { url: string; size: number }) => {
  return (
    <ShareButtonStyles>
      <EmailShareButton url={url} resetButtonStyle={false}>
        <EmailIcon size={size} round />
      </EmailShareButton>
      <FacebookShareButton url={url} resetButtonStyle={false}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} resetButtonStyle={false}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>
    </ShareButtonStyles>
  );
};
