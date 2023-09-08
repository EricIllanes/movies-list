import { useDispatch, useSelector } from "react-redux";
import { saveMovies } from "../Redux/actions";
import { useEffect, useState } from "react";
import axios from "axios";
import CardMovies from "./Card";
const { VITE_API_KEY, VITE_API_HOST, VITE_API_KEY_NEW} = import.meta.env;

export function HomePage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getInitialMovies();
    console.log(moviesHome)
  }, []);
  const {moviesHome} = useSelector((state)=> state)
  async function getInitialMovies() {
    // const url =
    //   "https://moviesdatabase.p.rapidapi.com/titles?limit=40&list=top_rated_english_250&startYear=1990&endYear=2023";
    // const headers = {
    //   "X-RapidAPI-Key": VITE_API_KEY,
    //   "X-RapidAPI-Host": VITE_API_HOST,
    // };
    // try {
    //   setIsLoading(true);
    //   const response = await axios.get(url, { headers });
    //   setMovies(response.data);
    //   dispatch(saveMovies(movies));
    //   setIsLoading(false);
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${VITE_API_KEY_NEW}`
  }
};

const petitios = await fetch(url, options)
const response = await petitios.json()
setMovies(response)
dispatch(saveMovies(response))
console.log(response)
console.log()
    } catch (error) {
      console.log(error)
    }
  }
if(isLoading){
  return(
    <div className="flex w-full h-screen items-center justify-center">
      <h1>L O A D I N G...</h1>
    </div>
  )
} else{
  return (
    <div className="flex bg-cinema bg-cover h-screen w-full items-center justify-center">
      <div className="grid grid-cols-8 h-2/3 w-1/3 items-center justify-self-start bg-sky-400">
        {/* <CardMovies /> */}
        {movies &&
          movies?.results?.map((movies, index) => {
            return (
              <CardMovies key={index}  url={`https://image.tmdb.org/t/p/w185/${movies.poster_path}`} />
            );
          })}
      </div>
    </div>
  );
}

}
