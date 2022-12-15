import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import LoginForm from "../../component/LoginForm";
import RegisterForm from "../../component/RegisterForm";

const Login: React.FC = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const [isLogin, setIsLogin] = useState<Boolean>(false);

  return (
    <Box>
      <Box
        width="100%"
        sx={{ backgroundColor: `${theme.palette.background.alt}` }}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sociopedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        sx={{ backgroundColor: `${theme.palette.background.alt}` }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} isLogin={isLogin} />
        ) : (
          <RegisterForm setIsLogin={setIsLogin} isLogin={isLogin} />
        )}
      </Box>
    </Box>
  );
};

export default Login;
