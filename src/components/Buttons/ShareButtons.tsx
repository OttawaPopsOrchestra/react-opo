import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import styled from "styled-components/macro";

const ShareButtonStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default ({ url, size }: { url: string; size: number }) => {
  return (
    <ShareButtonStyles>
      <EmailShareButton url={url}>
        <EmailIcon size={size} round />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>
    </ShareButtonStyles>
  );
};
