import React, { useContext } from "react";
import { useContextCustom } from "../context/StateContext";

const One = () => {
  const { count } = useContextCustom();

  return (
    <div>
      <h2>Number:{count}</h2>
    </div>
  );
};

export default One;
