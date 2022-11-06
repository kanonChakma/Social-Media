import { createContext, FC, useEffect, useState } from "react";

interface darkModeContextInterface {
  darkMode: boolean;
  toggle?: () => void;
}

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const darkModeContextValue: darkModeContextInterface = {
  darkMode: JSON.parse(localStorage.getItem("darkMode") as string) || false,
};

export const DarkModeContext =
  createContext<darkModeContextInterface>(darkModeContextValue);

export const DarkModeContextProvider: FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    darkModeContextValue.darkMode
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={{ toggle, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
