// Create a function which takes a array arr of integers
// as an argument. This function must return another function,
// which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements from
// the first array multiplied by the integer.
// multiply([1, 2, 3])(2) ➞ [2, 4, 6]
// multiply([4, 6, 5])(10) ➞ [40, 60, 50]
// multiply([1, 2, 3])(0) ➞ [0, 0, 0]

function multiply(arr) {
    let arr1 = []
    return function (num) {
        for (i of arr) {
            arr1.push(num * arr[i-1])
        }
        console.log(arr1)

    }


}
multiply([1,2,3])(5)
