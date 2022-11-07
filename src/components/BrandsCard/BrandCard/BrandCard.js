import React from "react";
import Brand from "../../BrandsList/Brand/Brand";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";
import SliderPhoto from "../../SliderPhoto/SliderPhoto";

const BrandCard = () => {
  const { t } = useTranslation();
  const BrandsData = [
    {
      brandName: "SASAKI",
      brandText: `${t("BrandsBox.SASAKI")}`,
      brandImg: "SASAKI.jpg",
      brandContent: `${t("BrandsPage.SASAKIText")}`,
      brandSlider: [
        "BrandsPictures/SASAKI/00.jpg",
        "BrandsPictures/SASAKI/01.jpg",
        "BrandsPictures/SASAKI/02.jpg",
        "BrandsPictures/SASAKI/03.jpg",
        "BrandsPictures/SASAKI/04.jpg",
        "BrandsPictures/SASAKI/05.jpg",
        "BrandsPictures/SASAKI/06.jpg",
      ],
    },

    {
      brandName: "NISHIOKA",
      brandText: `${t("BrandsBox.NISHIOKA")}`,
      brandImg: "NISHIOKA.jpg",
      brandContent: `${t("BrandsPage.NISHIOKAText")}`,
      brandSlider: [
        "BrandsPictures/NISHIOKA/03.png",
        "BrandsPictures/NISHIOKA/04.jpg",
        "BrandsPictures/NISHIOKA/05.jpg",
        "BrandsPictures/NISHIOKA/06.jpg",
        "BrandsPictures/NISHIOKA/07.jpg",
        "BrandsPictures/NISHIOKA/08.jpg",
        "BrandsPictures/NISHIOKA/09.jpg",
        "BrandsPictures/NISHIOKA/10.jpg",
        "BrandsPictures/NISHIOKA/11.jpg",
        "BrandsPictures/NISHIOKA/12.jpg",
        "BrandsPictures/NISHIOKA/13.jpg",
        "BrandsPictures/NISHIOKA/14.jpg",
      ],
    },
    {
      brandName: "TOKAI",
      brandText: `${t("BrandsBox.TOKAI")}`,
      brandImg: "TOKAI.jpg",
      brandContent: `${t("BrandsPage.TOKAIText")}`,
      brandSlider: [
        "BrandsPictures/TOKAI/01.jpg",
        "BrandsPictures/TOKAI/02.jpg",
        "BrandsPictures/TOKAI/03.jpg",
        "BrandsPictures/TOKAI/04.jpg",
        "BrandsPictures/TOKAI/05.jpg",
      ],
    },
    {
      brandName: "Taiwan Manufacturers ",
      brandText: `${t("BrandsBox.Taiwan")}`,
      brandImg: "Taiwan.png",
      brandContent: `${t("BrandsPage.TaiwanText")}`,
      brandSlider: [
        "BrandsPictures/TOKAI/02.jpg",
        "BrandsPictures/NISHIOKA/08.jpg",
        "BrandsPictures/NISHIOKA/09.jpg",
        "BrandsPictures/TOKAI/03.jpg",
        "BrandsPictures/TOKAI/04.jpg",
        "BrandsPictures/TOKAI/05.jpg",
      ],
    },
  ];
  return (
    <Box>
      {BrandsData.map((item) => (
        <Box
          key={item.brandName}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "background.paper",
            marginBottom: "3rem",
            padding: "3rem",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ flex: "1", margin: "1rem" }}>
            <Brand
              brandName={item.brandName}
              brandText={item.brandText}
              brandImg={item.brandImg}
              //   brandContent={item.brandContent}
            />
          </Box>

          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            <SliderPhoto Sliderphoto={item.brandSlider} />

            {/* {SASAKISliderData.map((item) => (
))} */}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export default BrandCard;
