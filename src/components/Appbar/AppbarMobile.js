import { Language, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Menu, MenuItem, Box } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Appdrawer from "./Appdrawer/Appdrawer";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "#292E34",
});

const AppbarMobile = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <AppBar position="fixed">
        <StyledToolbar>
          <Box>
            <Language
              onClick={() => {
                setLanguageOpen(true);
              }}
            />
          </Box>

          <Box
            sx={{
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "50%" }}
              src={require("../../pictures/roxicon.png")}
              alt="ICON"
            />
          </Box>

          <Box>
            <MenuIcon
              onClick={() => {
                setDrawerOpen(true);
              }}
            />
          </Box>
        </StyledToolbar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={languageOpen}
          onClose={(e) => setLanguageOpen(false)}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 50, left: 0 }}
          transitionDuration={600}
        >
          <MenuItem
            onClick={() => {
              changeLanguage("en");
              setLanguageOpen(false);
            }}
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => {
              changeLanguage("es");
              setLanguageOpen(false);
            }}
          >
            Español
          </MenuItem>
        </Menu>
      </AppBar>
      <Appdrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
};

export default AppbarMobile;
