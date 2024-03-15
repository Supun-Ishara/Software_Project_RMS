import axios from "axios";

export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER_OBJ = "GET_USER_OBJ";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_CURRENCIES_SUCCESS = "FETCH_CURRENCIES_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";


export const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const userDeleted = () => ({
  type: DELETE_USER,
});

export const userAdded = () => ({
  type: ADD_USER,
});

export const userUpdated = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const userGetObj = () => ({
  type: GET_USER_OBJ,
});

export const userFetchedData = (users) => ({
  type: FETCH_DATA_SUCCESS,
  payload: users,
});

export const fetchCountriesSuccess = (countries) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCurrenciesSuccess = (currencies) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: currencies,
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
      dispatch(getUsers(resp.data));
    })
    .catch((error) => {dispatch(fetchFailure(error));
    });
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => {dispatch(fetchFailure(error));
      });
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => {dispatch(fetchFailure(error));
      });
  };
};

export const updateUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(userUpdated(resp.data));
      })
      .catch((error) => {dispatch(fetchFailure(error));
      });
  };
};

export const getUserObj = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((resp) => {
        dispatch(userGetObj());
      })
      .catch((error) => {dispatch(fetchFailure(error));
      });
  };
};

export const fetchDataSuccess = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(userFetchedData(resp.data));
      })
      .catch((error) => {dispatch(fetchFailure(error));
      });
  };
};

export const fetchCountries = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_COUNTRY}`)
      .then((response) => {
        dispatch(fetchCountriesSuccess(response.data));
      })
      .catch((error) => {dispatch(fetchFailure(error));
      });
  };
};

export const fetchCurrencies = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API_CURRENCY}`)
      .then((response) => {
        dispatch(fetchCurrenciesSuccess(response.data));
      })
      .catch((error) => {dispatch(fetchFailure(error));
      });
  };
};