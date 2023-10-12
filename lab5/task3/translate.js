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
        'я': 'ya'
    };

    const pattern = new RegExp(Object.keys(transliterationMap).join('|'), 'g');
    const result = text.replace(pattern, (match) => transliterationMap[match] || match);
    
    return result;
}

ukrText.addEventListener("input", () => {
    engText.textContent = transliterate(ukrText.value);
})