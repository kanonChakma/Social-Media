import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../state/hook";
import NavBar from "../navBar/NavBar";
import UserWidget from "../widgets/UserWidget";

const HomePage: React.FC = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const user = useAppSelector((state) => state.user);

  return (
    <div>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={user?._id} picturePath={user?.picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        ></Box>
        <Box></Box>
      </Box>
    </div>
  );
};

export default HomePage;
