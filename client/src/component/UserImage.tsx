import { Box } from "@mui/material";
import React from "react";

interface imageProps {
  image?: string;
  size?: string;
}

const UserImage: React.FC<imageProps> = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};
export default UserImage;
