import { createContext, useState } from "react";

const ThemeContext = createContext(true);

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
