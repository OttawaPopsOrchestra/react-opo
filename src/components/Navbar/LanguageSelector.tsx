import React, { useState } from "react";
import { IconButton, MenuItem, Menu, Tooltip } from "@material-ui/core";
import Language from "@material-ui/icons/Language";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const getLanguages = () => ({
  en: "English",
  fr: "Français",
});

export const getCurrentLanguage = () => {
  return (
    i18n.language ||
    (typeof window !== "undefined" && window.localStorage.i18nextLng) ||
    "en"
  );
};

const LanguageSelector = () => {
  const LANGUAGES = getLanguages();
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(
    Object.keys(LANGUAGES).includes(i18n.language)
      ? i18n.language
      : i18n.languages[1]
  );

  /* Used to set position of Material UI Menu */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClickLanguageSelector(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  async function handleMenuItemClick(id: string) {
    await i18n.changeLanguage(id);

    setLang(id);
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Tooltip title="Language">
        <IconButton
          onClick={handleClickLanguageSelector}
          aria-label="select language"
          color="inherit"
        >
          <Language />
        </IconButton>
      </Tooltip>

      <Menu
        id="menu-language"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.entries(LANGUAGES).map(([id, name]) => (
          <MenuItem
            key={id}
            value={id}
            selected={id === lang}
            onClick={async () => await handleMenuItemClick(id)}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelector;
