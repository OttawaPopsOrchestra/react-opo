import React from "react";
import styled from "styled-components/macro";
import { Card, CardContent } from "@mui/material";
import { primaryMaroon } from "../constants/colors";
import {
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  BREAKPOINT_MOBILE,
} from "../constants/constants";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";

const IMAGE_HEIGHT = 160;

const ContactCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em auto 0;
  width: 32em;
  align-items: center;

  .contactImage {
    border-radius: 50%;
    width: ${IMAGE_HEIGHT}px;
    height: ${IMAGE_HEIGHT}px;
    object-fit: cover;
    object-position: 0 5%;
    position: relative;
    margin-bottom: ${IMAGE_HEIGHT / -2}px;

    /* same shadow effect as card with elevation = 5 */
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
      0px 10px 14px 1px rgba(0, 0, 0, 0.14),
      0px 4px 18px 3px rgba(0, 0, 0, 0.12);
  }

  .contact-card {
    width: 100%;
    padding-top: ${IMAGE_HEIGHT / 2}px;
    height: ${IMAGE_HEIGHT}px;

    .header {
      display: flex;
      justify-content: center;
      color: ${primaryMaroon};
      align-items: center;

      .name {
        font-size: ${FONT_SIZE_MEDIUM - 4}px;
        max-width: 50%;
      }

      .title {
        font-size: ${FONT_SIZE_SMALL}px;
        max-width: 50%;
      }

      .pipe {
        padding: 0 10px;
      }

      .name {
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    .info {
      padding-top: 1em;
      font-size: ${FONT_SIZE_SMALL + 2}px;

      a {
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
      }

      .phone,
      .email {
        padding: 0em 1em;

        .MuiSvgIcon-root {
          padding-right: 1em;
          color: ${primaryMaroon};
        }
      }
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 90vw;

    .contact-card {
      .header {
        font-size: ${FONT_SIZE_SMALL + 2}px;
      }

      .info {
        font-size: ${FONT_SIZE_SMALL - 2}px;

        .phone,
        .email {
          padding: 0em 10px;

          .MuiSvgIcon-root {
            padding-right: 10px;
          }
        }
      }
    }
  }
`;

type ContactType = {
  name: string;
  title: string;
  phone?: string;
  email: string;
  imgPath?: string;
};

export default function ContactCard({
  name,
  title,
  phone,
  email,
  imgPath,
}: ContactType) {
  return (
    <ContactCardStyles>
      {imgPath ? (
        <img src={imgPath} className="contactImage" alt={name} />
      ) : (
        <PersonIcon className="contactImage" />
      )}
      <Card className="contact-card" elevation={10}>
        <CardContent>
          <div className="header">
            <div className="name">{name}</div>
            <div className="pipe">|</div>
            <div className="title">{title}</div>
          </div>
          <div className="info">
            {phone && (
              <div className="phone">
                <a href={`tel:${phone}`}>
                  <PhoneIcon />
                  {phone}
                </a>
              </div>
            )}
            <div className="email">
              <a href={`mailto:${email}`}>
                <MailOutlineIcon />
                {email}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContactCardStyles>
  );
}
