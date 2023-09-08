import axios from "axios";
export const SAVE_MOVIES = "GET_MOVIES"
const {VITE_API_KEY, VITE_API_HOST} = import.meta.env
// const VITE_API_KEY = import.meta.env.VITE_API_KEY
// const VITE_API_HOST = import.meta.env.VITE_API_HOST

export const saveMovies = (movies) => async (dispatch)=>{
      dispatch({
        type: SAVE_MOVIES,
        payload: movies
      })

}