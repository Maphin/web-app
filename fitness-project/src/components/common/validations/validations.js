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
export const phoneValidation = (phone) => {
    let error = '';
    if (phone.length < 17) {
        error = "The phone number you entered appears to be incomplete";
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
export const priceValidation = (price) => {
    let error = '';
    if (price > 9999.99) {
        error = "Price cannot be bigger than 9999,99";
    }
    if (price < 0) {
        error = "Price cannot be less than 0";
    }
    return error;
};
export const periodValidation = (period) => {
    let error = '';
    if (period < 0 || period > 12) {
        error = "Period cannot be less than 0 or bigger than 12";
    }
    return error;
};
export const hasErrors = (errors) => {
    return Object.values(errors).some(error => error !== '');
};
export const cardValidation = (input, type) => {
    let error = '';

    switch (type) {
        case 'cardNumber':
            if (input.length < 19) {
                error = "The credit card number you entered appears to be incomplete";
            }
            break;
        case 'cvv':
            if (input.length < 3) {
                error = "The CVV number you entered appears to be incomplete";
            }
            break;
        case 'expiryDate':
            if (input.length < 7) {
                error = "The expiration date you entered appears to be incomplete";
            }
            break;
        default:
            break;
    }

    return error;
};
