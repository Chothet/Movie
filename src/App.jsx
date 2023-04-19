import { useReducer } from "react";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
const App = () => {
  // const initialState = 0;
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "increase":
  //       return state + 1;
  //     case "decrease":
  //       return state - 1;
  //     case "reset":
  //       return 0;
  //     default:
  //       return action.state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <MovieList />
      </div>
      {/* <p>{state}</p> */}
      {/* <button
        className="px-3 py-3 bg-blue-500 text-center"
        onClick={() => dispatch({ type: "increase" })}
      >
        Increase
      </button>
      <button
        className="px-3 py-3 bg-red-500 text-center ms-1"
        onClick={() => dispatch({ type: "decrease" })}
      >
        Decrease
      </button>
      <button
        className="px-3 py-3 bg-green-500 text-center ms-1"
        onClick={() => dispatch({ type: "reset" })}
      >
        Decrease
      </button> */}
    </>
  );
};

export default App;
