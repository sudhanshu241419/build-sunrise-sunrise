import axios from 'axios'

//insertion of resource
export const getData = async (resource,data) => {
    return {userId:101,userName:'Sudhanshu',token:'AHKJ32743877343TIEFL'}
   return await axios.post(apiUrl+resource, data, {
        headers: { 'Content-type': 'application/json' }
    });
}

