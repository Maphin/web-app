let length = document.querySelector("#length");
let width = document.querySelector("#width");
let perimeter = document.querySelector("#perimeter");
let area = document.querySelector("#area");
let diagonal = document.querySelector("#diagonal_length");

const validation = () => {
    return Number(length.value) > 0 && Number(width.value) > 0;
}

const calculatePerimeter = () => {
    if (validation()) {
        let result = (Number(length.value) + Number(width.value)) * 2;
        perimeter.textContent = result;
    } else {
        perimeter.textContent = "Can't calulate the perimeter"
    }
}

const calculateArea = () => {
    if (validation()) {
        let result = Number(length.value) * Number(width.value);
        area.textContent = result;
    } else {
        area.textContent = "Can't calulate the area";
    }
    
}

const calculateDiagonal = () => {
    if (validation()) {
        let result = Math.sqrt((Number(length.value) ** 2) + (Number(width.value) ** 2));
        diagonal.textContent = result; 
    } else {
        diagonal.textContent = "Can't calulate the length of the diagonal"
    }
}

const handleChange = () => {
    calculatePerimeter();
    calculateArea();
    calculateDiagonal();
}

length.addEventListener('input', handleChange);
width.addEventListener('input', handleChange);