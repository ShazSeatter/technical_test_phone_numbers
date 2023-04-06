function createPhoneNumber(numbers) {
    // Code here
    // Plan - what is the purpose
    // function takes in an array of numbers
    // return a string of numbers, with first 3 numbers wraped in () and rest of numbers split with - and laied out in 3 and then 4 numbers with spaces seperating (xxx) xxx-xxxx
    const newArr = numbers.map(String) // this returns an array of string numbers [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    const first3Num = newArr.slice(0,3) // returns ["1", "2", "3"]

    const next3Num = newArr.slice(3,6) // returns ["4", "5", "6"]

    const next4Num = newArr.slice(6,10) // returns ["7", "8", "9", "0"]

    const joined3Num = first3Num.join("")

    const joinedSecond3Num = next3Num.join("")

    const joinedLast4Num = next4Num.join("")
    return `(${joined3Num}) ${joinedSecond3Num}-${joinedLast4Num}`
//     const joined = first3Num.concat(next3Num).concat(next4Num)
//     console.log(joined)
}

module.exports = createPhoneNumber;