import React from "react";
import StoryCard from "../components/Stories/StoryCard";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE } from "../constants/constants";
import { useTranslation } from "react-i18next";

const StoryStyles = styled.div`
  margin: 0 auto;
  padding: 0em 10em;
  font-family: FuturaPTMedium, "Trebuchet MS", Arial, sans-serif !important;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    padding: 0;
  }
`;

export default () => {
  const { t } = useTranslation("Stories");
  const stories = [
    {
      imgPath: "/img/stories/story4/Jeff Leiper - Photo 1.jpg",
      title: t("story4-title"),
      preview: t("story4-preview"),
      author: "Jeff Leiper",
      translate: "Mathieu Roy",
      date: t("story4-date"),
      readMore: "/",
    },
  ];

  return (
    <StoryStyles>
      {stories.map((story) => (
        <StoryCard {...story} />
      ))}
    </StoryStyles>
  );
};
