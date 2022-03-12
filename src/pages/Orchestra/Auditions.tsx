import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import Banner from "../../components/Banner";
import ActionButton from "../../components/Buttons/ActionButton";
import TabsContainer from "../../components/TabsContainer";
import { lightGrey, primaryMaroon } from "../../constants/colors";
import { BREAKPOINT_MOBILE, FONT_SIZE_SMALL } from "../../constants/constants";

export default function Auditions() {
  const { t } = useTranslation("Auditions");
  const tabs = useFetchAudtionTabs();

  return (
    <>
      <Banner imgPath="img/Auditions.jpg" title={t("title")} />
      <AuditionStyles>
        <div className="content">
          <div className="focusAndRegister">
            <div className="focus">{t("p1")}</div>
            <ActionButton name={t("regHere")} link="#audition-reg" />
          </div>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p>{t("p4", { postProcess: "markdown-jsx" })}</p>
          <hr />
          <b>
            <p>{t("p5")}</p>
          </b>
          <TabsContainer tabs={tabs} />
          <h2>{t("results-title")}</h2>
          <p>{t("results-p1")}</p>
          <h2>{t("membership-title")}</h2>
          <p>{t("membership-p1")}</p>
          <p>{t("membership-p2")}</p>
          <b>
            <a
              href="pdf/Ottawa%20Pops%20Orchestra%20Musician%20Policy%20updated%20July%202019.pdf"
              target="_blank"
            >
              Ottawa Pops Orchestra Musician Policy
            </a>
          </b>
          <b>
            <a
              href="/pdf/Orchestral%20Development%20Bursary.pdf"
              target="_blank"
            >
              Orchestral Development Bursary
            </a>
          </b>
          <div id="audition-reg">
            <iframe
              title="Auditions"
              src="https://docs.google.com/forms/d/e/1FAIpQLSecGvNIiQiXRxwq-qPYKx4-bCCHXNDZQYyxpMq1XmhVfCia3A/viewform?embedded=true"
              width="625"
              height="500"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </AuditionStyles>
    </>
  );
}

function useFetchAudtionTabs() {
  const { t } = useTranslation("Auditions");

  return [
    {
      label: t("strings-title"),
      text: (
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{t("concertMaster-title")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>{t("concertMaster-p1", { postProcess: "markdown-jsx" })}</p>
              <Typography variant="h6">{t("scales-title")}</Typography>
              <ul>
                <li>{t("scales-val")}</li>
              </ul>
              <Typography variant="h6">{t("excerpts-title")}</Typography>
              <ul>
                <li>{t("excerpts-p1")}</li>
                <li>{t("excerpts-p2")}</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <h4>{t("scales-title")}</h4>
          <p>{t("scales-p1")}</p>
          <ul>
            <li>{t("scales-l1")}</li>
            <li>{t("scales-l2")}</li>
            <li>{t("scales-l3")}</li>
            <li>{t("scales-l4")}</li>
          </ul>
        </>
      ),
    },
    {
      label: t("woodwinds-title"),
      text: (
        <ul>
          <li>{t("woodwinds-p1")}</li>
          <li>{t("woodwinds-p2")}</li>
          <li>{t("woodwinds-p3")}</li>
          <li>{t("woodwinds-p4")}</li>
        </ul>
      ),
    },
    {
      label: t("brass-title"),
      text: t("brass-p1"),
    },
    {
      label: t("percussionists-title"),
      text: (
        <>
          <p>{t("percussionists-p1")}</p>
          <p>{t("percussionists-p2")}</p>
          <p>{t("percussionists-p3")}</p>
          <Typography variant="h6">{t("live-title")}</Typography>
          <ul>
            <li>{t("live-p1")}</li>
            <li>{t("live-p2")}</li>
            <li>{t("live-p3")}</li>
            <li>{t("live-p4")}</li>
            <li>{t("live-p5")}</li>
          </ul>
        </>
      ),
    },
    {
      label: t("harp-title"),
      text: t("harp-p1"),
    },
    {
      label: t("piano-title"),
      text: (
        <ul>
          <li>{t("piano-p1")}</li>
          <li>{t("piano-p2")}</li>
        </ul>
      ),
    },
  ];
}

const AuditionStyles = styled.div`
  background-color: ${lightGrey};
  font-family: "Quicksand", sans-serif !important;

  a {
    color: ${primaryMaroon};
    text-decoration: none;
  }

  h2,
  h3,
  h4,
  h6 {
    color: ${primaryMaroon};
    font-weight: bold;
  }

  .MuiBox-root {
    background-color: white;
    margin: 0 auto;
    border-radius: 10px;

    .MuiButtonBase-root {
      font-size: ${FONT_SIZE_SMALL - 2}px;
    }

    .MuiTabPanel-root {
      min-height: 200px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    padding: 5em 0;
    font-size: ${FONT_SIZE_SMALL}px;
  }

  .focusAndRegister {
    display: grid;
    grid-template-columns: 70% 20%;
    grid-column-gap: 2em;
    padding-bottom: 2em;

    .focus {
      font-size: ${FONT_SIZE_SMALL + 2}px;
      font-weight: 700;
      border: 2px solid ${primaryMaroon};
      color: ${primaryMaroon};
      padding: 1em;
      border-radius: 25px;
      text-align: center;
      box-shadow: 10px 10px 8px grey;
    }

    button {
      background-color: white;
    }
  }

  #audition-reg {
    margin: 2em auto 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    .MuiBox-root {
      width: 100%;
    }

    .content {
      width: 90%;
    }
    .focusAndRegister {
      display: grid;
      grid-template-columns: auto;
      grid-row-gap: 1em;
    }
  }
`;
