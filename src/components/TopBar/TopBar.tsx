import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
import { Tooltip, IconButton, AppBar, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageSelector from "./LanguageSelector";
import { BREAKPOINT_MOBILE } from "../../constants/constants";

const TopBarStyles = styled(AppBar)`
  #logo {
    height: 40px;
    padding: 1em;
  }

  #menu {
    margin-left: 1em;
  }

  #spacer {
    flex-grow: 1;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    #logo {
      height: 25px;
      padding: 0em;
    }
  }
`;

export default () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);

  return (
    <TopBarStyles position="sticky" color="inherit">
      <Toolbar>
        <Tooltip title={"Navigation"}>
          <IconButton
            id="menu"
            edge="start"
            color="inherit"
            aria-label="Menu"
            onClick={() => {
              setIsLeftDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Link to="/">
          <img
            id="logo"
            src="/img/logos/OPO-Logo-Alternate.png"
            alt="Ottawa Pops Orchestra"
          />
        </Link>
        <LeftDrawer
          open={isLeftDrawerOpen}
          setIsLeftDrawerOpen={setIsLeftDrawerOpen}
        />
        <div id="spacer" />
        <LanguageSelector />
      </Toolbar>
    </TopBarStyles>
  );
};
