import { createContext, useContext, useState } from "react";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [movieLists, setMovieLists] = useState([
    { id: 1, name: "Horror Movie", price: 50 },
    { id: 2, name: "Spider Man", price: 40 },
    { id: 3, name: "IP Man", price: 60 },
    { id: 4, name: "Bat Man", price: 30 },
    { id: 5, name: "Super Man", price: 90 },
  ]);
  // const [count, setCount] = useState(0);
  const data = { movieLists, setMovieLists };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const useContextCustom = () => useContext(StateContext);
