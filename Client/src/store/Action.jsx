import axios from 'axios';
// import { toast } from "react-toastify";
// import { Update } from '../pages/CreateCompany/Update';
// import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType";
import * as types from "./ActionType";

const getUsers = (users) => ({
     type: types.GET_USERS,
     payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USER,
});

const userAdded = () => ({
    type: types.ADD_USER,
});

const userUpdated = (user) => ({
    type: types.UPDATE_USER,
    payload: user,
});

const userGetObj = () => ({
    type: types.GET_USER_OBJ,

});

/* Read */
const userFetchedData = (users) => ({
    type: types.FETCH_DATA_SUCCESS,
    payload: users,
})

/* Read */

/*country & currency */

export const fetchCountriesSuccess = (countries) => ({
    type: types.FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  });
  
  export const fetchCurrenciesSuccess = (currencies) => ({
    type: types.FETCH_CURRENCIES_SUCCESS,
    payload: currencies,
  });
/*country & currency */

export const loadUsers = () => {
     return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
             .then((resp) => {
            console.log("resp", resp);
            dispatch(getUsers(resp.data));
        })
        .catch((error) => console.log(error)); 
     };
    };

    export const deleteUser = (id) => {
        return function (dispatch){
           axios.delete(`${process.env.REACT_APP_API}/${id}`)
                .then((resp) => {
               console.log("resp", resp);
               dispatch(userDeleted());
               dispatch(loadUsers());
           })
           .catch((error) => console.log(error)); 
        };
       };    

       export const addUser = (user) => {
        return function (dispatch){
           axios.post(`${process.env.REACT_APP_API}`, user)
                .then((resp) => {
               console.log("resp", resp);
               dispatch(userAdded());
               dispatch(loadUsers());
           })
           .catch((error) => console.log(error)); 
        };
       };    
       
       export const updateUser = (id) => {
        return function (dispatch){
           axios.get(`${process.env.REACT_APP_API}/${id}`)
                .then((resp) => {
               console.log("resp", resp);
               dispatch(userUpdated(resp.data));
           })
           .catch((error) => console.log(error)); 
        };
       };

       export const getUserObj = (user, id) => {
        return function (dispatch){
           axios.put(`${process.env.REACT_APP_API}/${id}`, user)
                .then((resp) => {
               console.log("resp", resp);
               dispatch(userGetObj());
           })
           .catch((error) => console.log(error)); 
        };
       };

       export const fetchDataSuccess = (id) => {
        return function (dispatch){
           axios.get(`${process.env.REACT_APP_API}/${id}`)
                .then((resp) => {
               console.log("resp", resp);
               dispatch(userFetchedData(resp.data));
           })
           .catch((error) => console.log(error)); 
        };
       };


       /*country & currency */

       export const fetchCountries = () => {
        return function (dispatch) {
          axios.get(`${process.env.REACT_APP_API_COUNTRY}`)
            .then((response) => {
              dispatch(fetchCountriesSuccess(response.data));
            })
            .catch((error) => console.log(error));
        };
      };
      
      export const fetchCurrencies = () => {
        return function (dispatch) {
          axios.get(`${process.env.REACT_APP_API_CURRENCY}`)
            .then((response) => {
              dispatch(fetchCurrenciesSuccess(response.data));
            })
            .catch((error) => console.log(error));
        };
      };

       /*country & currency */