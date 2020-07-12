import React from "react";
import StoryCard, { StoryCardProps } from "../components/Stories/StoryCard";
import styled from "styled-components/macro";
import { BREAKPOINT_TABTOP } from "../constants/constants";
import { useTranslation } from "react-i18next";
import { getDateObject } from "../utils/dateTimeUtils";

const StoryStyles = styled.div`
  margin: 0 auto;
  padding: 0em 10em;
  font-family: FuturaPTMedium, "Trebuchet MS", Arial, sans-serif !important;

  @media (max-width: ${BREAKPOINT_TABTOP}px) {
    padding: 0;
  }
`;

export default () => {
  const { t } = useTranslation("Stories");
  const stories = [
    {
      imgPath: "/img/stories/story1/Photo 1- Neon Sign.jpg",
      title: t("story1-title"),
      preview: t("story1-preview"),
      author: t("OPO"),
      date: t("story1-date"),
      readMore: "/",
    },
    {
      imgPath: "/img/stories/story2/Twin Flames Photo 1.JPG",
      title: t("story2-title"),
      preview: t("story2-preview"),
      author: "Carmen Harris",
      date: t("story2-date"),
      readMore: "/",
    },
    {
      imgPath: "/img/stories/story3/Deonandan_by_Sarah_Mercer_ExtraLarge.jpg",
      title: t("story3-title"),
      preview: t("story3-preview"),
      author: "Raywat Deonandan",
      translate: "Alexandre Bigeau",
      date: t("story3-date"),
      readMore: "/",
    },
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
      {orderStories(stories).map((story) => (
        <StoryCard key={story.title} {...story} />
      ))}
    </StoryStyles>
  );
};

function orderStories(stories: StoryCardProps[]): StoryCardProps[] {
  return stories.sort(
    (a, b) => getDateObject(b.date).getTime() - getDateObject(a.date).getTime()
  );
}
