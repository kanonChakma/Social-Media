import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { setFriends } from "../state/authSlice";
import { useAppDispatch, useAppSelector } from "../state/hook";
import Friend from "./Friend";
import WidgetWrapper from "./WidgetWrapper";

interface FriendListProps {
  userId: string;
}

interface FriendTypes {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  picturePath: string;
  friendId: string;
  subtitle: string;
  occupation: string;
}

const FriendListWidget: React.FC<FriendListProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const { palette } = useTheme();
  const token = useAppSelector((state) => state.token);
  const friends = useAppSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend: FriendTypes) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
