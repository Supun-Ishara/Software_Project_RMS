// import createSlice from "@reduxjs/toolkit";
//import { Action } from "history"
//import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import { type } from "@testing-library/user-event/dist/type";
import * as types from "./ActionType";

const initialState={
    users:[],
    user:{},
    loading: false
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return{
                ...state,
                users: action.payload,
                loading: false,
            };
        case types.DELETE_USER:
        case types.ADD_USER: 
        case types.GET_USER_OBJ: 
            return{
                ...state,
                loading: false,
            };   
        case types.UPDATE_USER:
            return{
                ...state,
                user: action.payload,
                loading: false,
            }  
        case types.FETCH_DATA_SUCCESS:
            return{
                ...state,
                user: action.payload,
                loading:false,
            }

        default:
            return state;
    }
};

export default Reducer;

// export const Reducer=(state = initialstate, action)=>{
//   switch(action.type) {
//     case MAKE_REQUEST:
//         return{
//             ...state,
//             loading: true
//         }
//     case FAIL_REQUEST:
//         return{
//             ...state,
//             loading:false,
//             errmessage: action.payload
//         }    
//     case GET_USER_LIST:
//         return{
//             loading: false,
//             errmessage: '',
//             userlist:action.payload,
//             userobj:{}
//         }   
//     case DELETE_USER:
//         return{
//             ...state,
//             loading:false
//         }  
//     case ADD_USER:
//         return{
//             ...state,
//             loading:false
//         }    
//     case UPDATE_USER:
//         return{
//             ...state,
//             loading:false
//         }   
//     case GET_USER_OBJ:
//         return{
//             ...state,
//             loading:false,
//             userobj:action.payload
//         }      

//     default: return state
//   }
// }