/* To handle first name validation*/
export function validateName(name) {
    var nameRegex = /^[a-zA-Z ]+$/;
    var name = name.trim();
    if (name == "" || name == undefined || name == null) {
        return { status: false, error: "Please enter your name."};
    }
    else if (!nameRegex.test(name)) {
        return { status: false, error: "Please enter valid name " };
    }
    else if (name.length < 2) {
        return { status: false, error: "Please enter atleast 2 characters." }
    }
    else {
        return { status: true, error: '' };
    }
}

/* To handle validation */
export function isEmpty(name){
    // var name = name.trim();
    if (name == "" || name == undefined || name == null) {
        return { status: true, error: "Field required"};
    }
}

/* To handle email validation */
export function validateEmail(email) {
     var emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    email = email.trim();
    if (email == "" || email == undefined || email == null) {
        return { status: false, error: "Please enter Email." };
    }
    else if (!emailRegex.test(email)) {
        return { status: false, error: "Please enter valid Email Address." };
    }
    else {
        return { status: true, error: '' };
    }
}
/* To validate password */

export function validatePassword(password) {

    // var passwordRegex = /^ (?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;
    password = password.trim();

    if (password == "" || password == undefined || password == null) {
        return { status: false, error: "Please enter password." }
    } 
    else if (!passwordRegex.test(password)) {
        return { status: false, error: "Password must contain: Atleast 1 uppercase,1 lowercase, 1 special character, 1 numeric letter to make your password strong."};
    }
    // else if (password.length < 8) {
    //     return { status: false, error: "Password must contain atleast 8 character."}
    // }
    else {
        return { status: true, error: '' }
    }
}