import { createContext, FC, useState } from "react";

interface authProps {
  children: JSX.Element[] | JSX.Element;
}

interface AuthContextState {
  currentUser: {
    id: number;
    name: string;
    profilePic: string;
  };
  login?: () => void;
}

export const authContextDefaultValue: AuthContextState | boolean = {
  currentUser: JSON.parse(localStorage.getItem("darkMode") as string) || {
    id: 1,
    name: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
};

export const AuthContext = createContext<AuthContextState>(
  authContextDefaultValue
);

export const AuthContextProvider: FC<authProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    AuthContextState["currentUser"]
  >(authContextDefaultValue.currentUser);

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
