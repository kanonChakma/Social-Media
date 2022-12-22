import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import AdvertWidget from "../../component/AdeverWidget";
import FriendListWidget from "../../component/FriendListWidget";
import MyPostWidget from "../../component/MyPostWidget";
import { useAppSelector } from "../../state/hook";
import NavBar from "../navBar/NavBar";
import UserWidget from "../widgets/UserWidget";

const HomePage: React.FC = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useAppSelector((state) => state.user);

  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
