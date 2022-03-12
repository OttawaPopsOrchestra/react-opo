import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { primaryMaroon } from "../../constants/colors";
import { BREAKPOINT_MOBILE } from "../../constants/constants";

export default function Conductors() {
  const { t } = useTranslation("Conductors");

  return (
    <ConductorsStyles>
      <Banner
        imgPath="img/conductors/conductor.jpg"
        title={t("title")}
        objectPosition="top"
      />
      <div className="body">
        <Conductor
          name="Jonathan Dagenais"
          imgPath="Jonathan-Dagenais.jpeg"
          paragraphs={[
            t("jonathan-p1"),
            t("jonathan-p2"),
            t("jonathan-p3"),
            t("jonathan-p4"),
            t("jonathan-p5"),
            t("jonathan-site", { postProcess: "markdown-jsx" }),
          ]}
        />
        <Conductor
          name="Trevor Wilson"
          imgPath="Trevor_Wilson.jpg"
          paragraphs={[t("trevor")]}
        />
        <Conductor
          name="Matthew Larkin"
          imgPath="matthew_larkin.jpeg"
          paragraphs={[t("matthew")]}
        />
      </div>
    </ConductorsStyles>
  );
}

function Conductor({
  name,
  imgPath,
  paragraphs,
}: {
  name: string;
  imgPath: string;
  paragraphs: string[];
}) {
  return (
    <Grid container spacing={{ xs: 4, md: 10 }}>
      <Grid item xs={12} md={4}>
        <img
          className="conductorImg"
          src={`img/conductors/${imgPath}`}
          alt={name}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <div className="name">{name}</div>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Grid>
    </Grid>
  );
}

const ConductorsStyles = styled.div`
  font-family: "Quicksand";
  .body {
    width: 70%;
    margin: 0 auto;
    font-size: 20px;

    .MuiGrid-root {
      margin-top: 0;
    }

    .name {
      font-size: 32px;
      font-weight: bold;
      color: ${primaryMaroon};
    }

    .conductorImg {
      width: 100%;
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    .body {
      width: 95%;
      font-size: 16px;
    }
  }
`;
