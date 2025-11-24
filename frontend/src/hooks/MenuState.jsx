// src/context/MenuContext.js
import { createContext, useContext, useState } from "react";

// 1. Create context
const MenuContext = createContext();

// 2. Provider component
export const MenuProvider = ({ children }) => {
  const [menuState, setMenuState] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <MenuContext.Provider
      value={{
        menuState,
        setMenuState,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};
