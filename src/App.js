import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import BrandsPage from "./pages/BrandsPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Appbar from "./components/Appbar/Appbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "./styles/Muitheme";
import ThemeContext from "./store/ThemeContex";
import Backtotop from "./UI/Backtotop";

const App = () => {
  const [muiTheme, setMuiTheme] = useState(LightTheme);

  const ThemeHandler = () => {
    setMuiTheme(muiTheme === LightTheme ? DarkTheme : LightTheme);
  };
  return (
    <ThemeContext.Provider value={{ ThemeHandler, muiTheme }}>
      <ThemeProvider theme={muiTheme}>
        <div>
          <Appbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="brands" element={<BrandsPage />} />
            <Route path="Products" element={<ProductsPage />} />
            <Route path="Contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <Backtotop />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
