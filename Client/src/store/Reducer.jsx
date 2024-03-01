import { type } from "@testing-library/user-event/dist/type";
import * as types from "./ActionType";

const initialState={
    users:[],
    user:{},

    /*country & currency */
    countries: [],
    currencies: [],
    /*country & currency */

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

            /*country & currency */

            case types.FETCH_COUNTRIES_SUCCESS:
                return {
                  ...state,
                  countries: action.payload,
                  loading: false,
                };
              case types.FETCH_CURRENCIES_SUCCESS:
                return {
                  ...state,
                  currencies: action.payload,
                  loading: false,
                };              
            
            /*country & currency */

        default:
            return state;
    }

    // switch(action.type){

    // }
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