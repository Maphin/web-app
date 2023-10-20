let firstName = document.querySelector("#first-name");
let midName = document.querySelector("#mid-name");
let lastName = document.querySelector("#last-name");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let birth = document.querySelector(".birth");
let radios = document.getElementsByName("gender");
let file = document.querySelector("#file");
let form = document.querySelector('.register__form');
let userTable = document.querySelector("#userTable");
let userTableBody = userTable.querySelector('tbody');
let deleteRowsButton = document.querySelector("#deleteRows");
let duplicateRowsButton  = document.querySelector("#duplicateRows");
let actions = document.querySelector(".register-actions");
let errorMessage = document.querySelector(".errorMessage");


const validation = () => {
    let errors = [];
    nameValidation(errors);
    passwordValidation(errors);
    emailValidation(errors);
    birthValidation(errors);
    return errors;
}

const nameValidation = (errors) => {
    if (/\d/.test(firstName.value) || /\d/.test(midName.value) || /\d/.test(lastName.value)) {
        errors.push("Only alphabet letters are allowed while typing a full name");
    }
}

const passwordValidation = (errors) => {
    if (password.value.length < 8) {
        errors.push("Password must be 8 characters at least");
    }
    if (password.value > 20) {
        errors.push("Password is too long");
    }
}

const birthValidation = (errors) => {
    const date = birth.value.split('-').map(v => Number(v));
    const year = date[0];
    if (year < 1910) {
        errors.push("You couldn't be born earlier than 1910");
    } else if (year > 2014) {
        errors.push("You must be at least 9 y.o.");
    }
}

const emailValidation = (errors) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email.value)) {
        errors.push("Invalid email format");
    }
}

const insertTableRow = () => {
    let newRow = userTableBody.insertRow();
    newRow.insertCell(0).textContent = `${firstName.value} ${midName.value} ${lastName.value}`;
    newRow.insertCell(1).textContent = email.value;
    newRow.insertCell(2).textContent = password.value;
    newRow.insertCell(3).textContent = phone.value;
    newRow.insertCell(4).textContent = birth.value;
    newRow.insertCell(5).textContent = getSelectedRadio();
    newRow.insertCell(6).textContent = file.value;
    
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    newRow.insertCell(7).appendChild(checkbox);

    userTable.style.display = 'table';
    actions.style.display = 'flex';
}

const getSelectedRadio = () => {
    let selected = '';
    for (const radio of radios) {
        if (radio.checked) {
            selected = radio.value;
            break;
        }
    }

    return selected;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = validation();
    if (errors.length > 0) {
        errorMessage.textContent = errors[0];
    } else {
        insertTableRow();
        form.reset();
    }
})

deleteRowsButton.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(box => {
        const row = box.closest("tr");
        row.remove();
    });
})

duplicateRowsButton.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(box => {
        const row = box.closest("tr");
        const newRow = row.cloneNode(true);
        userTableBody.appendChild(newRow);
    });
})