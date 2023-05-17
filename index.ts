export const test = () => {
    console.log('Activity 1');
}

test();

interface CityInterface {
    name: string
    country: string
    population: number
}

let cityArray : CityInterface[] = JSON.parse((localStorage.getItem('City') || '[]'));

export const addCity = (name : string, country : string, population : number) => {
    cityArray.push({name, country, population})
    localStorage.setItem('City', JSON.stringify(cityArray));
    displayCity();
};

//Display List
export const displayCity = () => {
    let cityList = document.getElementById("list")
    
    if (cityList) {
        while (cityList.hasChildNodes() && cityList.firstChild){
            cityList.removeChild(cityList.firstChild)
        }
    }
    
    cityArray.forEach((element) => {
        let p = document.createElement("p")
        p.innerText = `${element.name} | ${element.country} | ${element.population}`;
        if (cityList) {
            cityList.appendChild(p)
        }
    });
}; 

//Search
export const search = (searchInput: string) => {
    const city = cityArray.filter((city) => {
        return (
            city.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            city.country.toLowerCase().includes(searchInput.toLowerCase())
        )
    })

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

displayCity();

//Item no. 2
export const validateIsbn = (isbn: string) => {
    let sum: number = 0;
    for (let i = 0; i < isbn.length; i++) {
        if (isbn[9] === 'X' || isbn[9] === 'x') {
            sum += 10 * (i + 1);
        } else {
            sum += isbn[i] as unknown as number * (i + 1);
        } 
    }
    sum = sum % 11;

    if (sum === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

//Item no. 3
const alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 
                  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
                ]
const vowels: string[] = ['A', 'E', 'I', 'O', 'U']
const consonants: string[] = ['B', 'C', 'D', 'F', 'G', 'H',
                    'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 
                    'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
                    ]
const number: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export const changeStr = (str : string) => {
    for (let i = 0; i < str.length; i++) {
        for (let l = 0; l < alphabet.length; l++){
            if (alphabet[l] === str[i].toUpperCase()) {
                for (let vowel of vowels){
                    if (alphabet[l + 1] === vowel){
                        console.log(alphabet[l + 1].toUpperCase())
                    } 
                }
                for (let consonant of consonants){
                    if (alphabet[l + 1] === consonant){
                        console.log(alphabet[l + 1].toLowerCase())
                    } 
                }
            }
        }
        for (let num of number) {
            if (str[i] === num){
                console.log(num)
            }
        }
    }
} 

//Item no. 4
const array = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];
export const moveZeroToEnd = (array: any[]): any[] => {
    let notZero = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] !== 0) {
            array[notZero] = array[i]
            notZero++
        }
    }

    while (notZero < array.length) {
        array[notZero] = 0
        notZero++
    }
    return array;
}

console.log(`Move zero to end: ${moveZeroToEnd(array)}`);