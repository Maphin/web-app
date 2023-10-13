let btn = document.querySelector("#submit");
let answer = document.querySelector("#answer");

const getDayOfBirth = () => {
    const date = document.querySelector("#date").value.split('-').map(v => Number(v));
    const [year, month, day] = [...date];

    if (year < 1583) {
        return "Year must be equal or over 1583";
    }

    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const dayOfBirth = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (dayOfBirth >= 0 && dayOfBirth < daysOfWeek.length) {
        return daysOfWeek[dayOfBirth];
    }

    return "Couldn't get the day! Try again!";
}

btn.addEventListener('click', () => {
    answer.textContent = getDayOfBirth();
});