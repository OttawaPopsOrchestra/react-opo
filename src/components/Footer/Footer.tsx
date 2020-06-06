import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { Typography, Divider, IconButton } from "@material-ui/core";
import { BREAKPOINT_MOBILE } from "../../constants/constants";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SubscribeButton from "./SubscribeButton";

// const FULL_WIDTH = 100;

const FooterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
  background-color: black;
  color: white;

  img {
    height: 80px;
    padding-bottom: 2em;
  }

  .col1,
  .col2,
  .col3 {
    padding: 2em 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .col1 {
    text-align: center;
    align-items: center;
    width: 75%;
  }

  .socialMedia {
    display: flex;
    justify-content: space-evenly;
    .MuiSvgIcon-root {
      font-size: 50px;
    }
  }

  .col3 {
    h5 {
      padding-bottom: 1em;
    }
  }

  hr {
    border-top: 2px white solid;
    padding: 1em 0em;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    grid-template-columns: auto;

    .col1 {
      margin: 0 auto;
      width: 80%;

      img {
        padding-top: 2em;
      }
    }

    .col1,
    .col2,
    .col3 {
      padding: 2em 0em;
    }

    .col2 {
      width: 90%;
      margin: 0 auto;
    }

    .socialMedia {
      .MuiSvgIcon-root {
        font-size: 35px;
      }
    }

    .col3 {
      padding: 2em 1.5em;

      h5 {
        padding-bottom: 10px;
      }
    }
    h6 {
      font-size: 1em;
    }
  }
`;

export default () => {
  const { t } = useTranslation("Footer");

  const socialMedia = [
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/ottawapopsorchestra/",
    },
    {
      label: "Twitter",
      icon: <TwitterIcon />,
      link: "https://twitter.com/OttawaPopsOrch",
    },
    {
      label: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/ottawapops/",
    },
    {
      label: "YouTube",
      icon: <YouTubeIcon />,
      link:
        "https://www.youtube.com/channel/UCvD4B1NFC_2HD5jxXl3U-SQ?pbjreload=10",
    },
  ];

  const boxOfficeInfo = [
    `${t("phone")}, ${t("time")}`,
    t("toll"),
    t("person"),
    t("online"),
  ];

  return (
    <FooterStyles>
      <div className="col1">
        <img
          id="logo"
          src="/img/logos/OPO_Logo_Symbol_White.png"
          alt="Ottawa Pops Orchestra"
        />
        <Typography variant="h6" gutterBottom>
          {t("profit")}
        </Typography>
      </div>
      <div className="col2">
        <SubscribeButton />
        <div className="socialMedia">
          {socialMedia.map(({ label, icon, link }) => (
            <IconButton color="inherit" aria-label={label} href={`${link}`}>
              {icon}
            </IconButton>
          ))}
        </div>
      </div>
      <div className="col3">
        <Typography variant="h5" gutterBottom>
          {t("boxOffice")}
        </Typography>
        <Divider />
        {boxOfficeInfo.map((item) => (
          <Typography variant="h6" gutterBottom>
            {item}
          </Typography>
        ))}
      </div>
    </FooterStyles>
  );
};
