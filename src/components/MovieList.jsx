import Movie from "./Movie";
import { useContextCustom } from "../context/StateContext";

const MovieList = () => {
  // const { movieLists, setMovieLists } = useContext(StateContext);
  const { movieLists, setMovieLists } = useContextCustom();
  return (
    <div>
      {movieLists.map((movieList) => {
        return <Movie key={movieList.id} {...movieList} />;
      })}
    </div>
  );
};

export default MovieList;
