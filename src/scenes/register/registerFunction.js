import { isEmpty, validateEmail } from '../../utils/validation'
export const UpdateSearch = (val, temp) => {  
    
    const searchTxt = val ? val : null
        
    if (searchTxt.length > 0) {
        let searchStringSplit = searchTxt.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
        const searchFilterData = temp.filter(item => 
            searchStringSplit.some(searchString => item.firstname.toLowerCase().includes(searchString))
        );       
        return searchFilterData;    
    }
    return false   
}

export const handleFormValidation = (data) =>{
    let errorMsg = "";
    
    if (!validateEmail(data.emailAddress)) {
        errorMsg += "Provide valid email address \n";          
    }
    if (isEmpty(data.firstName)) {
        errorMsg += "Firstname Required  \n";            
    }
    if (isEmpty(data.lastName)) {
        errorMsg += "Lastname Required  \n";
    }
    if (isEmpty(data.zipCode)) {
        errorMsg += "zipcode is required  \n"
    }
    if (isEmpty(data.phoneNumber)) {
        errorMsg += "Phone number is required  \n";
    }
    if (isEmpty(data.city)) {
        errorMsg += "City is Required  \n";
    }
    if (isEmpty(data.streetAddress)) {
        errorMsg += "Street Address Is Required  \n";
    }
    if (isEmpty(data.state)) {
        errorMsg +="State Required  \n";           
    }
    if(!isEmpty(errorMsg)){
        alert(errorMsg)
        return false
    }
    return true
}