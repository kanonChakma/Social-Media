import { FC } from "react";
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./home.scss";

const Home: FC<{}> = () => {
  return (
    <div className="home">
      <div className="container">
        <Stories />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
