import { useContextCustom } from "../context/StateContext";
// import { StateContext } from "../context/StateContext";
const Nav = () => {
  const { movieLists, setMovieLists } = useContextCustom();
  return (
    <nav className="flex justify-between bg-primary shadow-md px-5 py-2 my-2 rounded bg-blue-500">
      <div className="flex items-center gap-4">
        <h1 className="text-white tracking-wider text-xl uppercase font-semibold">
          Developed by...
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center text-white bg-header rounded px-4 py-2 gap-2"></div>
        <div className="flex items-center gap-2 px-2 py-2">
          <h1 className="text-white tracking-wider text-xl uppercase font-semibold">
            Movie List of: {movieLists.length}
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
