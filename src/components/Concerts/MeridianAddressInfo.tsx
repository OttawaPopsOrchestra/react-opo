import React from "react";
import { useTranslation } from "react-i18next";

export default function MeridianAddressInfo() {
  const { t } = useTranslation("Concerts");
  return (
    <>
      <a
        href="https://goo.gl/maps/WApi9KGcGra1nVLM7"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("meridian")}
      </a>
    </>
  );
}
