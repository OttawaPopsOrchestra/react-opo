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
    grid-gap: 2em;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    padding: 2em 1em !important;

    .pageTitle {
      font-size: ${FONT_SIZE_MEDIUM + 4}px;
      color: ${primaryMaroon};
    }

    .contact {
      font-size: ${FONT_SIZE_SMALL}px;
    }

    .contactGrid {
      grid-template-columns: auto;
      grid-gap: 10px;
    }
  }
`;

export default () => {
  const { t } = useTranslation("Contact");

  const contacts = [
    {
      name: "Mathieu Roy",
      title: t("artisticDirector"),
      phone: "(613) 793 - 3998",
      email: "mathieu.roy@ottawapopsorchestra.ca",
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
};
