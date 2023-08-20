import { GET_MOVIES } from "./actions";

const initialState={
    moviesHome : [],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_MOVIES:
            return{
                ...state,
                moviesHome: action.payload
            }
            
        default:
            return state;
    }
}