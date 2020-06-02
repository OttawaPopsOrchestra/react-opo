import React, { useState } from "react";
import styled from "styled-components/macro";
import { navBackground } from "../../constants/colors";
import { Link } from "react-router-dom";
import LeftDrawer from "../LeftDrawer/LeftDrawer";
import { Tooltip, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const NavBarStyles = styled.div`
  display: flex;
  background-color: ${navBackground};
  align-items: center;

  #logo {
    height: 75px;
    padding: 1em;
  }

  #menu {
    margin-left: 1em;
  }
`;

export default () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);

  return (
    <NavBarStyles>
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
          src="/img/OPO-Logo-Alternate.png"
          alt="Ottawa Pops Orchestra"
        />
      </Link>
      <LeftDrawer
        open={isLeftDrawerOpen}
        setIsLeftDrawerOpen={setIsLeftDrawerOpen}
      />
    </NavBarStyles>
  );
};
