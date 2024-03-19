import * as types from "./Action";

const initialState = {
  users: [],
  user: {},

  /*country & currency */
  countries: [],
  currencies: [],
  /*country & currency */

  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
    case types.ADD_USER:
    case types.GET_USER_OBJ:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

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
};

export default Reducer;