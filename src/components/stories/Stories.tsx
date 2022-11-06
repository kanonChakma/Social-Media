import { FC, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories: FC<{}> = () => {
  const { currentUser } = useContext(AuthContext);

  const Stories = [
    {
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/13990668/pexels-photo-13990668.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/13990668/pexels-photo-13990668.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/13990668/pexels-photo-13990668.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/13990668/pexels-photo-13990668.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/13990668/pexels-photo-13990668.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="img" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {Stories.map((story) => (
        <div className="story">
          <img src={story.profilePic} alt="img" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
