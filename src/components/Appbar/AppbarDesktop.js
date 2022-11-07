import { Language } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  Toolbar,
  styled,
  MenuItem,
  Box,
  Menu,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Menulist from "../Menulist/Menulist";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "#292E34",
});

const Appbardesktop = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();
  return (
    <div>
      <AppBar position="fixed">
        <StyledToolbar>
          <Box
            sx={{
              width: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "160px" }}
              src={require("../../pictures/roxicon.png")}
              alt="ICON"
            />

            <Typography
              variant="h1"
              fontWeight="medium"
              sx={{ fontSize: { xs: "12px", sm: "18px" } }}
            >
              Rox Auto Parts
            </Typography>
          </Box>

          <Box
            sx={{
              mt: "10px",
            }}
          >
            <Menulist />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              onClick={() => {
                setLanguageOpen(true);
              }}
              sx={{ display: "flex" }}
            >
              <Language />
              <Typography>{t("Language.language")}</Typography>
            </Box>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={languageOpen}
              onClose={(e) => setLanguageOpen(false)}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 60, left: 2000 }}
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
          </Box>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Appbardesktop;
