

// Your task is to write function cipher that converts a regular English sentence to ciphered text.

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

// For example:

console.log(cipher("I HAVE A SECRET MESSAGE FOR YOU"));
// returns 
"O IQCT Q LTEKTZ DTLLQUT YGK NGX"
console.log(decipher("O IQCT Q LTEKTZ DTLLQUT YGK NGX"));
// After you've finished the cipher part add a new function to decipher back to English

// In this exercise we use a simple encoding mapping with English alphabet in the left column 
// and ciphered matches in the left column:

function cipher(param1){
  var arr = Array.from(param1);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "A") arr[i] = 'Q';
    else if (arr[i] == "B") arr[i] = 'W';
    else if (arr[i] == "C") arr[i] = 'E';
    else if (arr[i] == "D") arr[i] = 'R';
    else if (arr[i] == "E") arr[i] = 'T';
    else if (arr[i] == "F") arr[i] = 'Y';
    else if (arr[i] == "G") arr[i] = 'U';
    else if (arr[i] == "H") arr[i] = 'I';
    else if (arr[i] == "I") arr[i] = 'O';
    else if (arr[i] == "J") arr[i] = 'P';
    else if (arr[i] == "K") arr[i] = 'A';
    else if (arr[i] == "L") arr[i] = 'S';
    else if (arr[i] == "M") arr[i] = 'D';
    else if (arr[i] == "N") arr[i] = 'F';
    else if (arr[i] == "O") arr[i] = 'G';
    else if (arr[i] == "P") arr[i] = 'H';
    else if (arr[i] == "Q") arr[i] = 'J';
    else if (arr[i] == "R") arr[i] = 'K';
    else if (arr[i] == "S") arr[i] = 'L';
    else if (arr[i] == "T") arr[i] = 'Z';
    else if (arr[i] == "U") arr[i] = 'X';
    else if (arr[i] == "V") arr[i] = 'C';
    else if (arr[i] == "W") arr[i] = 'V';
    else if (arr[i] == "X") arr[i] = 'B';
    else if (arr[i] == "Y") arr[i] = 'N';
    else if (arr[i] == "Z") arr[i] = 'M';
  }
  return arr.join('');
}

function decipher(param1){
  var arr = Array.from(param1);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Q") arr[i] = 'A';
    else if (arr[i] == "W") arr[i] = 'B';
    else if (arr[i] == "E") arr[i] = 'C';
    else if (arr[i] == "R") arr[i] = 'D';
    else if (arr[i] == "T") arr[i] = 'E';
    else if (arr[i] == "Y") arr[i] = 'F';
    else if (arr[i] == "U") arr[i] = 'G';
    else if (arr[i] == "I") arr[i] = 'H';
    else if (arr[i] == "O") arr[i] = 'I';
    else if (arr[i] == "P") arr[i] = 'J';
    else if (arr[i] == "A") arr[i] = 'K';
    else if (arr[i] == "S") arr[i] = 'L';
    else if (arr[i] == "D") arr[i] = 'M';
    else if (arr[i] == "F") arr[i] = 'N';
    else if (arr[i] == "G") arr[i] = 'O';
    else if (arr[i] == "H") arr[i] = 'P';
    else if (arr[i] == "J") arr[i] = 'Q';
    else if (arr[i] == "K") arr[i] = 'R';
    else if (arr[i] == "L") arr[i] = 'S';
    else if (arr[i] == "Z") arr[i] = 'T';
    else if (arr[i] == "X") arr[i] = 'U';
    else if (arr[i] == "C") arr[i] = 'V';
    else if (arr[i] == "V") arr[i] = 'W';
    else if (arr[i] == "B") arr[i] = 'X';
    else if (arr[i] == "N") arr[i] = 'Y';
    else if (arr[i] == "M") arr[i] = 'Z';
  }
  return arr.join('');
}
/*
  A : Q,
  B : W,
  C : E,
  D : R,
  E : T,
  F : Y,
  G : U,
  H : I,
  I : O,
  J : P,
  K : A,
  L : S,
  M : D,
  N : F,
  O : G,
  P : H,
  Q : J,
  R : K,
  S : L,
  T : Z,
  U : X,
  V : C,
  W : V,
  X : B,
  Y : N,
  Z : M

*/


