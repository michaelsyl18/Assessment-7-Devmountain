function addToZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let m = 1 + 1; m < array.length; m++)
        if (array[i] + array[m] === 0){
            return true 
        } else {
            return false
        }
    }
}

console.log(addToZero([1, 2, 3, -2]));



//////////////////////////////////////////////////////////////////////////

function hasUniqueChars(string) {
    for (let i = 0; i < string.length; i++) {
        for (let m = 1 + 1; m < string.length; m++)
        if (string[i] === string[m]){
            return false; 
        } else {
            return true;
        }
    }
}

console.log(hasUniqueChars("Monday"));

//////////////////////////////////////////////////////////////////////////


function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return "nonPangram";
      }
    }
    return "pangram";
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog"))

  ///////////////////////////////////////////////////////////////////////

  function findLongestWord(str) {
    let strSplit = str.split(" ");
    let longestWord = 0;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy do"));