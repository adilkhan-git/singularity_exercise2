// Write a function that takes a string,
// breaks it up and returns it with vowels first,
// consonants second. For any character that's' +
// ' not a vowel (like special characters or spaces),' +
// ' treat them like consonants. Vowels are a, e, i, o, u.
// split("abcde") ➞ "aebcd"
// split("Hello!") ➞ "eoHll!"
// split("What's the time?") ➞ "aeieWht's th tm?"


function split(str) {

    let arr1 = str.split('')
    let arr2 = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 'a' || arr1[i] === 'e' || arr1[i] === 'i' || arr1[i] === 'o' || arr1[i] === 'u') {
            arr2.push(arr1.splice(i, 1))
        }

    }
    let notVow = arr1.join('')
    let vowels = arr2.join('')
    console.log(vowels + notVow)
}
split("What's the time?")

