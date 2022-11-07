import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Comment from "../comments/Comment";
import "./post.scss";
interface postProps {
  post: {
    id?: number;
    name?: string;
    userId?: number;
    profilePic?: string;
    desc?: string;
    img?: string | undefined;
  };
}
const Post: FC<postProps> = ({ post }) => {
  const { name, profilePic, desc, img, id } = post;
  const [showComment, setShowComment] = useState(false);
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userdata">
            <img src={profilePic} alt="img" />
            <div className="user-details">
              <Link
                to={`/profile/${id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="username">{name}</span>
              </Link>
              <span className="date">a few second ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <span>{desc}</span>
          <img src={img} alt="img" />
        </div>
        <div className="social-media">
          <div className="media">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <span>Likes</span>
          </div>
          <div className="media" onClick={() => setShowComment(!showComment)}>
            <SmsOutlinedIcon />
            <span>Comments</span>
          </div>
          <div className="media">
            <ShareOutlinedIcon />
            <span>Share</span>
          </div>
        </div>
        {showComment && <Comment />}
      </div>
    </div>
  );
};

export default Post;
