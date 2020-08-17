import AsyncStorage from '@react-native-community/async-storage';

export let getAccessToken = async () =>{
    let token = await AsyncStorage.getItem('token');
    return token;        
}

export let getUser =  async () =>{
    let user = await AsyncStorage.getItem('user');
    return JSON.parse(user);
}

export let removeToken = async ()=>{    
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    return;
}

export const SetAcessToken = async(token, userId,email,firstName,lastName,groupId)=>{
    await AsyncStorage.setItem('token',token)
    await AsyncStorage.setItem('user',JSON.stringify({'userId':userId,'email':email,'firstName':firstName,'lastName':lastName,'groupId':groupId}))
};