import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, TextField, Typography } from "@mui/material";
import { EmailInput } from "../../styles/CustomMui";
import { useTranslation } from "react-i18next";

export const EmailForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  console.log(form.current);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_TOKEN
      )
      .then((result) => {
        console.log(result.text + "發送成功");
        e.target.reset();
      })
      .catch((e) => {
        console.log(e.text + "發送失敗");
      });
  };

  return (
    <>
      <Box
        flex={1}
        sx={{
          padding: "2rem",
          color: "primary.main",

          height: "350px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "35px", lg: "40px" },
              fontWeight: "Medium",
            }}
            variant="h2"
          >
            {t("ContactPage.ContactTitle")}
          </Typography>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: "Medium",
            }}
          >
            {t("ContactPage.ContactSubTitle")}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{
              marginTop: "2rem",
              marginBottom: "2rem",
              fontSize: { xs: "15px", sm: "18px" },
              fontWeight: "Medium",
            }}
          >
            {t("ContactPage.ContactText1")}
          </Typography>
        </Box>
        <Box>
          <Typography>{t("ContactPage.ContactText2")}</Typography>
          <br />
          <Typography>{t("ContactPage.ContactText3")}</Typography>
        </Box>
      </Box>
      <Box flex={1} sx={{ display: "flex", flexDirection: "column" }}>
        <form
          id="ContactForm"
          ref={form}
          onSubmit={sendEmail}
          style={{
            height: "400px",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <EmailInput
            fullWidth
            placeholder={`${t("ContactPage.ContactForm1")}`}
            required
            type="text"
            name="user_company"
          />
          <EmailInput
            fullWidth
            placeholder={`${t("ContactPage.ContactForm2")}`}
            required
            type="email"
            name="user_email"
          />
          <EmailInput
            fullWidth
            placeholder={`${t("ContactPage.ContactForm3")}`}
            type="text"
            name="user_name"
          />
          <EmailInput
            fullWidth
            placeholder={`${t("ContactPage.ContactForm4")}`}
            type="text"
            name="user_phone"
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder={`${t("ContactPage.ContactForm5")}`}
            required
            name="message"
            sx={{ marginBottom: "1.5rem" }}
          />
          <Button
            variant="outlined"
            type="submit"
            form="ContactForm"
            sx={{ width: { xs: "100%", md: "38%" } }}
          >
            {t("ContactPage.ContactForm6")}
          </Button>
        </form>
      </Box>
    </>
  );
};
