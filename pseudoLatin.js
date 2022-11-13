// Pseudo Latin

// Create a function which takes a string as an argument and 
// moves the first letter of each word to the end of it, then adds "ay"
// to the end of the word. Leave punctuation marks untouched.

makeLatin("I speak latin")
// should return:
"Iay peaksay atinlay"

// massiv arrayev kak otdelnix slov
// 

function makeLatin(word){
    var arr = word.split(" ");
    for (var i = 0; i < arr.length; i++){
        var firstLetter = arr[i][0];
        arr[i] = arr[i].replace(firstLetter, '');
        arr[i] += firstLetter + "ay";
    }
    return arr.join(" ");
}

console.log(makeLatin("I speak latin"));