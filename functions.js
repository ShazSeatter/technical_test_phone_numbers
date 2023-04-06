function createPhoneNumber(numbers) {
    // Code here
    // Plan - what is the purpose
    // function takes in an array of numbers
    // return a string of numbers, with first 3 numbers wraped in () and rest of numbers split with - and laied out in 3 and then 4 numbers with spaces seperating (xxx) xxx-xxxx

    const first3Num = numbers.slice(0,3).join("") // returns ["1", "2", "3"]then joins it

    const next3Num = numbers.slice(3,6).join("") // returns ["4", "5", "6"]

    const next4Num = numbers.slice(6,10).join("") // returns ["7", "8", "9", "0"]

    return `(${first3Num}) ${next3Num}-${next4Num}`
}

module.exports = createPhoneNumber;