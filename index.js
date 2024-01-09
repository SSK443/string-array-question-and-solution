thor='god of thunder'
//total count of character
console.log(`the total count of thor= ${thor.length}`)
//how print substrings
// let substring=thor.substring(0,9)
// console.log(substring)
console.log(thor.substring(0,9))
//check start of string
console.log(`check thor starting with g= ${thor.startsWith('god')}`)
//check end of string
console.log(`check thor ending with der= ${thor.endsWith('der')}`)
//split is used convert string  into an array
console.log(thor.split(' '))//,split less space',
console.log(thor.split(''))//'split more space',
loki=' god of mischef '
console.log(`total character count of loki = ${loki.length}`)
// trim use to reduce space both ends
console.log(`total character count of loki = ${loki.trim().length}`)
// trim from start starting
console.log(`total character count of loki = ${loki.trimStart().length}`)
// trim from start starting
console.log(`total character count of loki = ${loki.trimEnd().length}`)
// convert to uppercase
console.log(`loki to smallcase =${loki.toUpperCase()}`)
// convert to uppercase
console.log(`loki to smallcase =${loki.toLowerCase()}`)

console.log('-----------------')


//1. check the a mail vaild or not?
console.log('check the mail vaild or not')
mail='devu@gmail.com'
console.log(`mail vaild or not = ${mail.endsWith('gmail.com')?'yes':'no'}`)
console.log('-----------------')

//2.check whether malayalam start 'm'or not

console.log('whether malayalam start m or not')
lang='malayalam'
console.log(`malayalam start m or not =${lang.startsWith('ma')?'yes':'no'}`)
console.log('-----------------')
 //3.print all vowels from given string ,input='hello hai',output=e,o,a,i
 
console.log('all vowels from given string ,input= hello hai output=e,o,a,i')
input ='hello hai'
vowels=['a','i','o','u']
output=input.split('').filter(words=>vowels.includes(words))
console.log(output)
//3.33 print all vowels from given string ,input='dog is a friends in need',output=e,o,a,i
word='dog is a friends in need'
letters=['s','r','i','n']
let outcome=word.split('').filter(lett=>letters.includes(lett))
console.log(outcome)

console.log('-----------------')
//4.display the word the count of the given paragraph
console.log('display the word the count of the given paragraph')
ph='Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed.But don t make them too big or they might just pop and then bye-bye balloon. Itll be gone and lost for the rest of mankind.They can serve a variety of purposes, from decorating to water balloon wars.You just have to use your head to think a little bit about what to do with them.'
console.log(ph.length)
console.log('-----------------')

products = [
  [1, 'hide and seek', 50, 20],
  [2, 'lays', 20, 80],
  [3, 'oreo', 40, 100],
  [4, 'parleG', 25, 0],
  [5, 'tiger', 20, 30],
  [6, 'unibic', 60, 20],
  [7, 'good day', 70, 20]
]
//4.search a string is available in a product array, it return an array of product which include 'a'the given string otherwise display no products are available
search='a'
let r=products.filter(p=>p[1].includes(search)).map(p=>p[1])
console.log(r)
console.log('-----------------')


