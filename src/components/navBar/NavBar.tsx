import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { FC } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar: FC<{}> = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <span>Social Goppo</span>
        </Link>
        <HomeOutlinedIcon />
        <WbSunnyOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="" alt="" />
          <span>username</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
