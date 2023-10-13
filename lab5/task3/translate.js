let ukrText = document.querySelector("#text-ukr");
let engText = document.querySelector("#text-eng");

const transliterate = (text) => {
    const transliterationMap = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'h',
        'д': 'd',
        'е': 'e',
        'є': 'ye',
        'ж': 'zh',
        'з': 'z',
        'и': 'y',
        'і': 'i',
        'ї': 'yi',
        'й': 'y',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'kh',
        'ц': 'ts',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'shch',
        'ь': "'",
        'ю': 'yu',
        'я': 'ya',
        'А': 'A',
        'Б': 'B',
        'В': 'V',
        'Г': 'H',
        'Д': 'D',
        'Е': 'E',
        'Є': 'Ye',
        'Ж': 'Zh',
        'З': 'Z',
        'И': 'Y',
        'І': 'I',
        'Ї': 'Yi',
        'Й': 'Y',
        'К': 'K',
        'Л': 'L',
        'М': 'M',
        'Н': 'N',
        'О': 'O',
        'П': 'P',
        'Р': 'R',
        'С': 'S',
        'Т': 'T',
        'У': 'U',
        'Ф': 'F',
        'Х': 'Kh',
        'Ц': 'Ts',
        'Ч': 'Ch',
        'Ш': 'Sh',
        'Щ': 'Shch',
        'Ь': "'",
        'Ю': 'Yu',
        'Я': 'Ya'
    };

    const pattern = new RegExp(Object.keys(transliterationMap).join('|'), 'g');
    const result = text.replace(pattern, (match) => transliterationMap[match] || match);
    
    return result;
}

ukrText.addEventListener("input", () => {
    engText.textContent = transliterate(ukrText.value);
})