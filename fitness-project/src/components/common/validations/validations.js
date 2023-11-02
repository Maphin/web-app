export const nameInputsValidation = (inputValue, fieldName) => {
    let error = '';
    if (/\d/.test(inputValue) || inputValue.length < 3) {
        error = `${fieldName} must be at least 3 characters and contain only alphabet letters`;
    }
    return error;
};
export const emailValidation = (email) => {
    let error = '';
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        error = "Invalid email format";
    }
    return error;
};
export const passwordValidation = (password) => {
    let error = '';
    if (password.length < 8) {
        error = "Password must be 8 characters at least";
    } else if (password.length > 20) {
        error = "Password is too long";
    }
    return error;
};
export const birthValidation = (dateOfBirth) => {
    let error = '';
    const date = dateOfBirth.split('-').map(v => Number(v));
    const year = date[0];

    if (year < 1910) {
        error = "You couldn't be born earlier than 1910";
    }
    return error;
};