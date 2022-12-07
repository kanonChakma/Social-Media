import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/Login/Login";
import ProfilePage from "./pages/profilePage/ProfilePage";
import { useAppSelector } from "./state/hook";
import { themeSettings } from "./theme";
const App: React.FC = () => {
  const mode = useAppSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useAppSelector((state) => state.token));
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
