import axios from "axios";
import { useState } from "react";
import Movies from "./MoviesLst";
import MoviesLst from "./MoviesLst";
import Temp2 from "./Temp2";

export default function AxiosImpl (){

    // const api = "https://dummyapi.online/api/movies";
    const api = "http://www.omdbapi.com/?apikey=57f4c435&s=black";

    const [movies,setMovies] = useState([]);

    async function fetchMovies(){
        const resp= await fetch(api).then((respons)=>respons.json()).then((data)=>data.Search);
        console.log(resp); 
        setMovies(resp);
        console.log("fetch method called");
    }

    const axiosMovies = async () => {        
        try {
            const response = await axios.get(api);
            setMovies(response.data.Search);
            console.log("Axios method called");
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }        
    }

    const clearClick = ()=>{
        setMovies([]);
    }

    return (
        <>              
            <div className="flex flex-col items-center min-h-screen w-screen gap-5 bg-gray-700" >
                <div className="mt-4">
                    <button className="w-24 h-9 p-2 m-1 hover:bg-[#1a1a2e]" onClick={fetchMovies}> fetch </button>
                    <button className="w-24 h-9 p-2 m-1  hover:bg-[#1a1a2e]" onClick={axiosMovies} > Axios </button>
                    <button className="w-24 h-9 p-2 m-1  hover:bg-[#1a1a2e]" onClick={clearClick} > Clear </button>
                </div>
                <h3>See the console for movies</h3>
                {console.log(movies.length>0)}                                
                {movies.length >0 && <MoviesLst MoviesLst={movies}/>}
            </div>            
            
        </>
    )
}