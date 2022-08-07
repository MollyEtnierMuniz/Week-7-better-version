///Note to grader: I added template literal expressions to the console messages so it's easier to read. I know the directions asked for a lot of T/F but it was getting overly ambiguous and we can't neglect the user experience, now, can we?! 

// //sumZero, two different arrays
const array1 = [28, 43, -12, 30, 4, 0, 12]
let value1 = false;
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array1.length; j++) {
    if (i !== j) {
      if (array1[i] + array1[j] === 0) {
        value1 = true;
      } 
    }
  }
}
console.log(`Sums to zero example 1? ${value1}`)

let array2 = [28, 43, -12, 30, 4, 0,]
let value2 = false;
for (let i = 0; i < array2.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (i !== j) {
      if (array2[i] + array2[j] === 0) {
        value2 = true;
      } 
    }
  }
}
console.log(`Sums to zero example 2? ${value2}`)
/// The runtime for both versions of SumZero is  O(n^2) because it has to run through two for-loops *simultaneously,* not consecutively. 



//Unique Characters
let fruit = ('apple')
//orange
unique = false
function hasUniqueChars (fruit){
    for (let i=0; i<fruit.length; i++)
    for (let j=1; j=fruit.length; j++)
    if (fruit[i] === fruit[j]){
        unique = false
    } else {
        unique = true
    }
}
console.log (`Characters are unique? ${unique}`)
//    
  
// The runtime complexity of hasUniqueChars is O(n^2) because it runs two (nested) for-loops. Thinking of it like a checkerboard, or big grid, one additional "row" necessitates the addition of another column as well. The function could also use the add.set functionality which (I believe) would put it O(n).



// Pan-gram Sentence
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 

const testArray1 = ['h', 'e','l','l','o']
const testArray2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let sentence = ("The Quick Brown Fox Jumped Over The Lazy Dog")
let lowerSent = sentence.toLowerCase()
const lowerSentArr = lowerSent.split('')
// console.log (lowerSentArr)
lowerSentArr.sort()
// console.log (lowerSentArr)

let checker = (arr, alphabet) => alphabet.every(v => arr.includes(v));

console.log (`Is pan-gram ex 1: ${(checker(testArray1,alphabet))}`) //false
console.log (`Is pan-gram ex 2: ${(checker(alphabet, testArray2))}`)  //true
console.log (`Is pan-gram ex 3: ${(checker(lowerSentArr, alphabet))}`) //true

//This function doesn't quite work but I don't know why. I think the runtime complexity is 
// O(n) because the "checker" function has to look at just one item at a time. 



// Longest Word
let wordList = ['Week 7','asymptotic', 'logarithm', 'exponential', 'omicron']
let currentLongest =[]
    for (let i=0; i<wordList.length; i++){
        if (wordList[i].length > currentLongest.length) {
            currentLongest = wordList[i]
        }
    }

    console.log (`The longest word is ${(currentLongest)}.`)

//This function has an O(n) runtime complexity because it's running one for-loop and 
//accessing the array. The runtime will depend on the size of the array, where adding a 
//longer array takes more time proportionally.
