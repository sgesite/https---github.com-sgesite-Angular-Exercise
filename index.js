"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeroToEnd = exports.validateIsbn = exports.search = exports.displayCity = exports.addCity = exports.test = void 0;
const test = () => {
    console.log('Activity 1');
};
exports.test = test;
(0, exports.test)();
let cityArray = JSON.parse((localStorage.getItem('City') || '[]'));
const addCity = (name, country, population) => {
    cityArray.push({ name, country, population });
    localStorage.setItem('City', JSON.stringify(cityArray));
    (0, exports.displayCity)();
};
exports.addCity = addCity;
//Display List
const displayCity = () => {
    let cityList = document.getElementById("list");
    if (cityList) {
        while (cityList.hasChildNodes() && cityList.firstChild) {
            cityList.removeChild(cityList.firstChild);
        }
    }
    cityArray.forEach((element) => {
        let p = document.createElement("p");
        p.innerText = `${element.name} | ${element.country} | ${element.population}`;
        if (cityList) {
            cityList.appendChild(p);
        }
    });
};
exports.displayCity = displayCity;
//Search
const search = (searchInput) => {
    const city = cityArray.filter((city) => {
        return (city.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            city.country.toLowerCase().includes(searchInput.toLowerCase()));
    });
    let list = document.getElementById("list");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    city.forEach((element) => {
        let p = document.createElement("p");
        p.innerText = `${element.name} | ${element.country} | ${element.population}`;
        if (list) {
            list.appendChild(p);
        }
    });
};
exports.search = search;
(0, exports.displayCity)();
//Item no. 2
const validateIsbn = (isbn) => {
    let sum = 0;
    for (let i = 0; i < isbn.length; i++) {
        if (isbn[9] === 'X' || isbn[9] === 'x') {
            sum += 10 * (i + 1);
        }
        else {
            sum += isbn[i] * (i + 1);
        }
    }
    sum = sum % 11;
    if (sum === 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
};
exports.validateIsbn = validateIsbn;
//Item no. 3
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
const vowels = ['A', 'E', 'I', 'O', 'U'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H',
    'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R',
    'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
];
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function transformString(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const vowels = 'aeiou';
    const transformedChars = str.split('').map(char => {
        const lowercaseChar = char.toLowerCase();
        const isVowel = vowels.includes(lowercaseChar);
        const isConsonant = alphabet.includes(lowercaseChar);
        if (isVowel) {
            return char.toUpperCase();
        }
        else if (isConsonant) {
            const nextCharIndex = (alphabet.indexOf(lowercaseChar) + 1) % alphabet.length;
            const nextChar = alphabet.charAt(nextCharIndex);
            return char === char.toUpperCase() ? nextChar.toUpperCase() : nextChar;
        }
        return char;
    });
    return transformedChars.join('');
}
//Item no. 4
const array = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];
const moveZeroToEnd = (array) => {
    let notZero = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[notZero] = array[i];
            notZero++;
        }
    }
    while (notZero < array.length) {
        array[notZero] = 0;
        notZero++;
    }
    return array;
};
exports.moveZeroToEnd = moveZeroToEnd;
console.log(`Move zero to end: ${(0, exports.moveZeroToEnd)(array)}`);
