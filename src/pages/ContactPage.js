import { Box, ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ContactBox from "../components/ContactBox/ContactBox";
import { EmailForm } from "../components/EmailForm/EmailForm";
import GeneralBanner from "../components/GeneralBanner/GeneralBanner";
import ThemeContext from "../store/ThemeContex";

const ContactPage = () => {
  const themeCTX = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={themeCTX.muiTheme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <GeneralBanner
          title={`${t("ContactPage.ContactBannerTitle")}`}
          content={`${t("ContactPage.ContactBannerText")}`}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.paper",
            width: { xs: "60%", sm: "75%" },
            marginTop: { xs: "3rem", md: "8rem" },
            padding: "3rem",
            borderRadius: "10px",
          }}
        >
          <EmailForm />
        </Box>
        <ContactBox />
      </Box>
    </ThemeProvider>
  );
};

export default ContactPage;
