// Helper Validation Functions
// check if string is empty
export const isEmpty = (string) => {
    if (String(string).trim() === '') return true;
    else return false;
}

// https://emailregex.com/
export const isEmail = (email) => {
    // Email Regular Expression
    // https://pastebin.com/f33g85pd
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    // https://stackoverflow.com/questions/43439895/js-ling-unnecessary-escape-character-no-useless-escape?rq=1
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(emailRegEx)
}