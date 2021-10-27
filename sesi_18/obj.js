// const kursi = {
//     warna: "putih salju",
//     bahan: "kain",
//     merk: "FSD OCBC",
//     harga: 500000
// };

// kursi["tinggi"] = "120 cm"; // add key-value\

// access value
// object['property']

// console.log(kursi);

// for (const property in kursi) {
//     console.log(`${property}: ${kursi[property]}`);
// }



// getValue = function(obj, key) {
//     return obj[key];
// }

// console.log(getValue(kursi, "merk"));

const removeSpaces = function(text){
    return text.split(' ').join('');
}

const reverseText = function(text){
    let result = "";
    for(let i = text.length-1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

const updateVowel = function(text){
    let result = "";
    const vowel = ['A', 'I', 'U', 'E', 'O', 'a', 'i', 'u', 'e', 'o'];
    for(let i = 0; i < text.length; i++) {
        if(vowel.includes(text[i])) {
            const shift = text[i].charCodeAt(0) + 1;
            result += String.fromCharCode(shift);
        }
        else {
            result += text[i];
        }
    }
    return result;
}

let text = "a b c i";
let noSpaces = removeSpaces(text);
let reversed = reverseText(noSpaces)
let encryptedPassword = updateVowel(reversed);
console.log(encryptedPassword);