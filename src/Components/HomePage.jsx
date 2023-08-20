import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/actions";
import { useEffect, useState } from "react";

export function HomePage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { moviesHome } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  console.log(moviesHome);
  return (
    <>
      <h1>Hola mundo!</h1>
      <div>
        {moviesHome &&
          moviesHome?.results?.map((movies, index) => {
            return (
              <div key={index}>
                <span>{movies.titleText.text}</span>
                <img src={movies.primaryImage?.url} alt="img" />
              </div>
            );
          })}
      </div>
    </>
  );
}
