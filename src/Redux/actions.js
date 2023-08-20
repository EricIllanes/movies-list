import axios from "axios";
export const GET_MOVIES = "GET_MOVIES"

// export async function getMovies() {
//     return async function(dispatch){
//         const url = "https://moviesdatabase.p.rapidapi.com/titles?limit=20";
//         const headers = {
//             "X-RapidAPI-Key": "af05b403e3mshce3e077c94ad345p13f6ddjsn56e6227a29c1",
//             "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
//         };
//         try {
//           const response = await axios.get(url, {headers});
//           dispatch({
//             type: GET_MOVIES,
//             payload: response.data
//           })
//       } catch (error) {
//           console.error(error);
//           dispatch({
//             type: GET_MOVIES,
//             payload: null
//           })
//       }

//     }

// }

export const getMovies = () => async (dispatch)=>{
    const url = "https://moviesdatabase.p.rapidapi.com/titles?limit=20";
    const headers = {
        "X-RapidAPI-Key": "af05b403e3mshce3e077c94ad345p13f6ddjsn56e6227a29c1",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
    };
    try {
      const response = await axios.get(url, {headers});
      dispatch({
        type: GET_MOVIES,
        payload: response.data
      })
  } catch (error) {
      console.error(error);
      dispatch({
        type: GET_MOVIES,
        payload: null
      })
  }
}