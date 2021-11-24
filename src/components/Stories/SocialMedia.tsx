import React from "react";
import styled from "styled-components/macro";
import { FONT_SIZE_SMALL, BREAKPOINT_MOBILE } from "../../constants/constants";

const SocialMediaStyles = styled.div`
  display: flex;
  align-items: center;

  .share {
    font-weight: 700;
    font-size: ${FONT_SIZE_SMALL}px;
    padding-right: 1em;
  }

  .icons {
    display: flex;

    a {
      background-color: rgba(106, 102, 164, 0.8) !important;
      border-radius: 50%;
      color: white !important;
      margin: 0 5px;
      height: 60px;
      width: 60px;
      line-height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 5px 5px rgba(106, 102, 164, 0.4);

      .MuiSvgIcon-root,
      .iconify {
        font-size: 2em !important;
      }
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    flex-direction: column;

    .share {
      padding-bottom: 1em;
    }

    .icons {
      a {
        height: 50px;
        width: 50px;
      }
    }
  }
`;

type SocialMediaProps = {
  share: string;
  socialMedias: {
    icon: any;
    link: string;
  }[];
};

export default function SocialMedia({ share, socialMedias }: SocialMediaProps) {
  return (
    <SocialMediaStyles>
      <div className="share">{share}</div>
      <div className="icons">
        {socialMedias.map(({ icon, link }) => {
          return (
            <a key={link} href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          );
        })}
      </div>
    </SocialMediaStyles>
  );
}
