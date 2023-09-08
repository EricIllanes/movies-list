import { SAVE_MOVIES } from "./actions";

const initialState={
    moviesHome : [],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case SAVE_MOVIES:
            return{
                ...state,
                moviesHome: action.payload
            }
            
        default:
            return state;
    }
}