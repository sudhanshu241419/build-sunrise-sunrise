import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations';

import { AuthContext } from './src/components/context';

import RootStackScreen from './src/navigations/RootStackScreen';

import {SetAcessToken,removeToken,getAccessToken} from './src/utils/api'

const App = ({navigation,}) => { 
  const initialLoginState = {
    isLoading: true,
    firstName:null,
    userName: null,
    userToken: null,
    userEmail:null,
    userRole:null,
    userId:null,
    id:null
  };

  const [userToken, setUserToken] = React.useState(null);
  const [userData, setUserData] = React.useState({
    firstName:'',
    lastName:'',
    email:''

  })

  React.useEffect(() => {   
    getAccessToken().then((value)=>setUserToken(value));     
  }, []);
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userId: action.id,
          userToken: action.token,
          firstName: action.firstName,
          lastName:action.lastName,
          userName: action.email,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userId: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userId: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };


  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState); 

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {      
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].email;
      const id = foundUser[0].id;
      setUserData({firstName:foundUser[0].firstName,lastName:foundUser[0].lastName,email:foundUser[0].email})
      try {
        SetAcessToken(
          foundUser[0].userToken,
          foundUser[0].id,          
          foundUser[0].email,
          foundUser[0].firstName,
          foundUser[0].lastName,
          foundUser[0].groupId
          );  
        //await AsyncStorage.setItem('userToken', userToken,);
      } catch(e) {
        console.log(e);
      }      
      dispatch({ type: 'LOGIN', id: id, token: userToken,firstName:foundUser[0].firstName,email:userName,lastName:foundUser[0].lastName });
    },
    signOut: async() => {
      try {
        removeToken ()
        setUserToken(null)
        //await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
   
  }), []);

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    { 
        loginState.userToken !== null || userToken !==null ? (
          <RootNavigator firstName={userData.firstName} lastName={userData.lastName} email={userData.email}/>
        ):<RootStackScreen />
    }
    </NavigationContainer>
    </AuthContext.Provider>

  );
};

export default App;