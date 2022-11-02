import { FC } from "react";

const Suggestions: FC<{}> = () => {
  return (
    <div className="user">
      <div className="userinfo">
        <img
          src="https://images.unsplash.com/photo-1667379586863-4a9403a163bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="img"
        />
        <span>username</span>
      </div>
      <div className="buttons">
        <button>follow</button>
        <button>dismiss</button>
      </div>
    </div>
  );
};

export default Suggestions;
