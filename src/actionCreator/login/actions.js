import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT,RETRIEVE_TOKEN } from './actionTypes';
import axios from '../../apiConfig';

export const fetchLogin = () => {
    return {
        type: LOGIN,
    };
}

export const fetchLoginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
}

export const fetchLoginRejected = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    };
}



export const checkLogin = (username, password) => {
    //IN order to use await your callback must be asynchronous using async keyword.
    console.log(username, password);
    return  dispatch => {    
        dispatch(fetchLogin());
        axios.post('integration/customer/token',{
                username: username,
                password: password
            })
            .then(function (response) {
                console.log(response)    
                //await SetAcessToken(response,1,'test',username,'manager');        
                dispatch(fetchLoginSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(fetchLoginRejected(error.message))
            });
        }
}

export const checkUser = async (username, password) => {  
    
    try {
        const res = await axios.post('integration/customer/token',{username: username,password: password}, 
            {headers: { 'Content-type': 'application/json' }
        });
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
    // axios.post('integration/customer/token',{
    //         username: username,
    //         password: password
    //     })
    //     .then(function (response) {
    //         //console.log(response)             
    //         return response;
    //     })
    //     .catch(function (error) {
    //         return false;
    //     });
}

