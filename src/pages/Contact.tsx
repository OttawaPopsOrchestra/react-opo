import React from "react";
import ContactCard from "../components/ContactCard";
import styled from "styled-components/macro";
import { lighterGrey, primaryMaroon } from "../constants/colors";
import { useTranslation } from "react-i18next";
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_MEDIUM,
  BREAKPOINT_MOBILE,
  FONT_SIZE_SMALL,
} from "../constants/constants";

const ContactStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${lighterGrey};
  padding: 2em 5em 3em;

  .pageTitle {
    font-size: ${FONT_SIZE_EXTRA_LARGE}px;
    color: ${primaryMaroon};
  }

  .contact {
    font-size: ${FONT_SIZE_MEDIUM - 2}px;
    a {
      color: ${primaryMaroon};
      text-decoration: none;
    }
  }

  .contactGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32em, 1fr));
    grid-row-gap: 2em;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    padding: 2em 0em !important;
    align-items: center;

    .pageTitle {
      font-size: ${FONT_SIZE_MEDIUM + 4}px;
      color: ${primaryMaroon};
      width: 90vw;
    }

    .contact {
      width: 90vw;
      font-size: ${FONT_SIZE_SMALL}px;
    }

    .contactGrid {
      width: 90vw;
      grid-template-columns: auto;
      grid-gap: 10px;
    }
  }
`;

export default function Contact() {
  const { t } = useTranslation("Contact");

  const contacts = [
    {
      name: "Mathieu Roy",
      title: t("artisticDirector"),
      phone: "(613) 793 - 3998",
      email: "mathieu.roy@ottawapopsorchestra.ca",
      imgPath: "/img/contact/mathieu-roy.jpg",
    },
    {
      name: "Carmen Harris",
      title: t("marketingManager"),
      email: "carmen.harris@ottawapopsorchestra.ca",
      imgPath: "/img/contact/Carmen Harris.jpg",
    },
    {
      name: "Lyndon Kirkley",
      title: t("sponsorshipCoord"),
      email: "lyndon.kirkley@ottawapopsorchestra.ca",
    },
    {
      name: "Sador Bereketab",
      title: t("eventsAndSponsCoord"),
      email: "sador.bereketab@ottawapopsorchestra.ca",
      imgPath: "/img/contact/Sador Bereketab.png",
    },
    {
      name: "Rachel Ostic",
      title: t("grantPropManager"),
      email: "rachel.ostic@ottawapopsorchestra.ca",
      imgPath: "/img/contact/Rachel Ostic.png",
    },
    {
      name: "Chloe Geller",
      title: t("librarian"),
      email: "chloe.geller@ottawapopsorchestra.ca",
      imgPath: "/img/contact/Chloe Geller.jpg",
    },
  ];

  return (
    <ContactStyles>
      <div className="pageTitle">{t("title")}</div>
      <div className="contact">
        {t("contact")}
        <a href="mailto:info@ottawapopsorchestra.ca">
          info@ottawapopsorchestra.ca.
        </a>
      </div>
      <div className="contactGrid">
        {contacts.map((contact) => (
          <ContactCard key={contact.name} {...contact} />
        ))}
      </div>
    </ContactStyles>
  );
}
