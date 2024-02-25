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



// export const makeRequest=()=>{
//     return{
//         type:MAKE_REQUEST
//     }
// }
// export const failRequest=(err)=>{
//     return{
//         type:FAIL_REQUEST,
//         payload:err
//     }
// }
// export const getUserList=(data)=>{
//     return{
//         type:GET_USER_LIST,
//         payload:data
//     }
// }

// export const deleteUser=()=>{
//     return{
//         type:DELETE_USER
//     }
// }

// export const addUser=()=>{
//     return{
//         type:ADD_USER
//     }
// }

// export const updateUser=()=>{
//     return{
//         type:UPDATE_USER
//     }
// }
// export const getUserObj=(data)=>{
//     return{
//         type:GET_USER_OBJ,
//         payload:data
//     }
// }

// export const FetchUserList=()=>{
//     return (dispatch)=>{
//         dispatch(makeRequest());
//         //setTimeout(() => {
//             axios.get('http://localhost:3000/users').then(res=>{
//                 const userlist=res.data;
//                 dispatch(getUserList(userlist));
//             }).catch(err=>{
//                 dispatch(failRequest(err.message))
//             })
//      //   }, 2000);
        
//     }
// }

// export const Removeuser=(code)=>{
//     return (dispatch)=>{
//         dispatch(makeRequest());
//         //setTimeout(() => {
//             axios.delete('http://localhost:3000/users' + code).then(res=>{
//                 dispatch(deleteUser());
//             }).catch(err=>{
//                 dispatch(failRequest(err.message))
//             })
//      //   }, 2000)    
//     }
// }

// export const FunctionAddUser=(data)=>{
//     return (dispatch)=>{
//         dispatch(makeRequest());
//         //setTimeout(() => {
//             axios.post('http://localhost:3000/users' ,data).then(res=>{
//                 dispatch(addUser());
//                 toast.success('Company added successfully.')
//             }).catch(err=>{
//                 dispatch(failRequest(err.message))
//             })
//      //   }, 2000)   
//     }
// }

// export const FunctionUpdateUser=(data,code)=>{
//     return (dispatch)=>{
//         dispatch(makeRequest());
//         //setTimeout(() => {
//             axios.put('http://localhost:3000/users' + code, data).then(res=>{
//                 dispatch(updateUser());
//                 toast.success('Company Updated successfully.')
//             }).catch(err=>{
//                 dispatch(failRequest(err.message))
//             })
//      //   }, 2000)   
//     }
// }

// export const FetchUserObj=(code)=>{
//     return (dispatch)=>{
//         dispatch(makeRequest());
//         //setTimeout(() => {
//             axios.get('http://localhost:3000/users' + code).then(res=>{
//                 const userlist=res.data;
//                 dispatch(getUserObj(userlist));
//             }).catch(err=>{
//                 dispatch(failRequest(err.message))
//             })
//      //   }, 2000)
        
//     }
// }

