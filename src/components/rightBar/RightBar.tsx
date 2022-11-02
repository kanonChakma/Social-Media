import { FC } from "react";
import ActiveOnline from "./ActiveOnline";
import LatestActive from "./LatestActive";
import "./rightBar.scss";
import Suggestions from "./Suggestion";
const RightBar: FC<{}> = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <Suggestions />
          <Suggestions />
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <LatestActive />
        </div>

        <div className="item">
          <span>Online Friends</span>
          <ActiveOnline />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
