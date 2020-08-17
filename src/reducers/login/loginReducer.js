import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../../actionCreator/login/actionTypes';

const initialState = {
    currentUser: [],
    loading: false,
    errorMessage: '',
}

const loginReducer = (state = initialState, action) => {
    console.log(action,'login reducer');
    
    switch(action.type) {
        case LOGIN: 
        return {...state, loading: true};
        case LOGIN_SUCCESS:
        return {...state, currentUser: action.payload, loading: false};
        case LOGIN_FAIL:
        return {...state, errorMessage: action.payload, loading: false};
        default: 
        return state;
    }
}

export default loginReducer;