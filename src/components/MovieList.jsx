import Movie from "./Movie";
import { useContextCustom } from "../context/StateContext";
import { AiTwotoneBank } from "react-icons/ai";
import viewphoto from "../img/zoom_background2.jpg";

const MovieList = () => {
  // const { movieLists, setMovieLists } = useContext(StateContext);
  const { movieLists, setMovieLists } = useContextCustom();
  return (
    <div calssName = "flex space-x-4 mb-6 text-sm font-medium ">
      <div className="flex-auto flex space-x-4 shadow flex-wrap px-8 ">
            <div className="flex bg-blue-400">
                    <div className="flex-auto  w-64">
                      <ul>
                        <li>Health & Beauty</li>
                        <li>Electronic Devices</li>
                        <li>Electronics Accessories</li>
                        <li>TV and Home Appliances</li>
                        <li>Women's Fashion</li>
                        <li>Men's Fashion</li>
                      </ul>
                    </div>
                    
                    
                        
                        <div className="w-5/6 bg-red-400" >
                          <div className=" mx-5"><img src = {viewphoto} ></img></div>
                        </div>
                        
              </div>           
                    

                   
            <div class="w-full text-sm font-medium text-slate-700 mt-2 ms-16">
               <button><a href = "" className="flex rounded-full w-32 bg-gray-400 py-3 px-2 text-white mx-5"><AiTwotoneBank/>Official Stores</a></button>
               <button><a href = "" className="flex rounded-full w-32 bg-gray-400 py-3 px-2 text-white mx-5"><AiTwotoneBank/>Shop Mart</a></button>
               <button><a href = "" className="flex rounded-full w-45 bg-gray-400 py-3 px-2 text-white mx-5"><AiTwotoneBank/>Express Delivery</a></button>
               <button><a href = "" className="flex rounded-full w-50 bg-gray-400 py-3 px-2 text-white mx-5"><AiTwotoneBank/>Top Up/E-Store</a></button> 
            </div>   
          {movieLists.map((movieList) => {
            return <Movie key={movieList.id} {...movieList} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
