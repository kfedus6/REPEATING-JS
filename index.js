/*
1.Функція перевірки паліндрома!!!
isPalindrom(test) false
isPalindrom(tet) true
*/
// const isPalindrom = (str) => {
//     return str === str.split('').reverse().join('')
// }
// console.log(isPalindrom('test'))

/*
2.Функція пошуку самого короткого слова!!!
findShort('the best react') the
findShort('react is better') is
*/
// const findShort = (string) => {
//     return string.split(' ').sort((a, b) => a.length - b.length)[0]
// }
// console.log(findShort('the best react'))

/*
3.Функція створення ініціалів!!!
toInitials(Mykola fedus) M.F.
toInitials(oleg gus) O.G.
*/
// const toInitials = (name) => {
//     return name.split(' ').map((el) => `${el.slice(0, 1).toUpperCase()}.`).join('')
// }
// console.log(toInitials('Mykola fedus'))

/*
4.Функція суммирования всіх цифр чисел!!!
sumDigits(12) 3
sumDigits(55) 10
*/
// const sumDigits = (number) => {
//     return Math.abs(number).toString().split('').reduce((sum, cur) => +sum + +cur, 0)
// }
// console.log(sumDigits(145))

/*
5.Функція пошуку мінімального та максимального значення в масиві!!!
minMax([3, 5, 7, 2, 7]) 2
minMax([3, 52, 73, 21, 7]) 3
*/
// const minMax = (arr) => {
//     return [Math.min(...arr), Math.max(...arr)]
// }
// console.log(minMax([3, 6, 7, 8, 5, 77]))

/*
6.Функція створення набору дублікатів символів строки!!!
accum(acdf) A-CC-DDD-FFFF
*/
// const accum = (string) => {
//     return string.toUpperCase().split('').map((el, i) => el += el.repeat(i).toLowerCase()).join('-')
// }
// console.log(accum('acdf'))

/*
7.Унікальеість всіх символів в строці!!!
isUnique('abc') true
isUnique('qwrt') true
isUnique('abcdc') false
*/
// const isUnique = (string) => {
//     // for (let i = 0; i < string.length; i++) {
//     //     const char = string[i]
//     //     if (string.lastIndexOf(char) !== i) return false
//     // }
//     //return true
//     return new Set(string).size === string.length
// }
// console.log(isUnique('abcdgqsr'))


/*
9.Функція рекурсія факторіал!!!
factorial(5) 120
*/
// const factorial = (number) => {
//     // let result = 1
//     // for (let f = 0; f < number; f++) {
//     //     result *= f + 1
//     // }
//     // return result
//     if (number <= 1) return 1
//     return number * factorial(number - 1)
// }
// console.log(factorial(5))

/*
10.Плоский масив!!!
flatten([[1, 2], [[3, 4]], [[[[[[5]]]]]]]) [1, 2, 3, 4, 5]
*/
// const flatten = (array) => {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             const flat = flatten(array[i])
//             for (let j = 0; j < flat.length; j++) {
//                 result.push(flat[j])
//             }
//         } else {
//             result.push(array[i])
//         }
//     }
//     return result
// }
// console.log(flatten([[1, 2], [[3, 4]], [[[[[[5]]]]]]]))


// const removeDupes = (str) => {
//     // const result = []
//     // const map = {}
//     // for (let i = 0; i < str.length; i++) {
//     //     const char = str[i]
//     //     if (!map[char]) {
//     //         map[char] = true
//     //         result.push(char)
//     //     }
//     // }
//     // return result.join('')
//     return Array.from(new Set(str)).join('')
// }
// console.log(removeDupes('adcdccasscadc'))


// const isStringRotated = (a, b) => {
//     return (a + a).includes(b) && a.length === b.length
// }
// console.log(isStringRotated('javascript', 'scriptjava'))

// const allAnagrams = (array) => {
//     const sorted = array.map(str => str.split('').sort().join(''))
//     for (let i = 0; i < sorted.length; i++) {
//         if (sorted[i] !== sorted[0]) return false
//     }
//     return true
// }
// console.log(allAnagrams(['abcd', 'acdb', 'cabd']))


// const search = (arr, number) => {
//     return arr.find(n => n === number)
// }
// console.log(search([1, 2, 3, 4, 5, 6, 22, 16, 87], 5))


// const countFruit = (array) => {
//     let count = {}
//     array.forEach(f => {
//         if (!count[f]) {
//             count[f] = 1
//         } else {
//             count[f]++
//         }
//     })
//     return count
// }
// console.log(countFruit(['apple', 'kiwi', 'orange', 'banana', 'apple', 'banana', 'kiwi', 'apple']))


// const isUnique = (array) => {
//     // const unique = {}
//     // array.forEach(unc => {
//     //     unique[unc] = true
//     // })
//     // return Object.keys(unique)
//     return Array.from(new Set(array))
// }
// console.log(isUnique(['apple', 'kiwi', 'orange', 'banana', 'apple', 'banana', 'kiwi', 'apple']))


// const groupStudents = (list) => {
//     const grouped = {}
//     list.forEach(s => {
//         if (!grouped[s.age]) {
//             grouped[s.age] = [s]
//         } else {
//             grouped[s.age].push(s)
//         }
//     })
//     return grouped
// }
// console.log(groupStudents([{ name: 'alex', age: 20 }, { name: 'kolya', age: 26 }, { name: 'oleg', age: 24 }, { name: 'dima', age: 20 }, { name: 'egor', age: 20 }]))