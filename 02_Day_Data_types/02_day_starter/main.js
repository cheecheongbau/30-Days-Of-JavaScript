// this is your main.js script
/*
1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
2. Print the string on the browser console using __console.log()__
3. Print the __length__ of the string on the browser console using _console.log()_
4. Change all the string characters to capital letters using __toUpperCase()__ method
5. Change all the string characters to lowercase letters using __toLowerCase()__ method
6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
8. Check if the string contains a word __Script__ using __includes()__ method
9. Split the __string__ into an __array__ using __split()__ method
10. Split the string 30 Days Of JavaScript at the space using __split()__ method
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
*/

let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(`#3 length of string is: ${challenge.length}`)
console.log(`#4 change all chars to UpperCase: ${challenge.toUpperCase()}`)
console.log(`#5 change all chars to LowerCase: ${challenge.toLowerCase()}`)
// #6
// search for first space and use result index as input for end of cut substring
console.log(`#6 slicing first word: ${challenge.substring(0, challenge.indexOf(' ', 0))}`) 
// use previous result as starting pos, use length as end pos, trim final result for trailing spaces
console.log(`#7 slicing all texts after first word: ${challenge.substring(challenge.indexOf(' ', 0), challenge.length ).trim()}`) 

console.log(`#8 check if ${challenge} contains "Script": ${challenge.includes("Script")}`)
console.log(`#9 split string into array using split fn: ${challenge.split()}`)
console.log(`#10 split string delimiting with space using split fn: ${challenge.split(' ')}`)

let task11String = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let task11Result = task11String.split(',')
console.log(`#11 ${task11String} | split at delimiter ',' and change to array: ${task11Result} , with type: ${typeof task11Result}`)

let task12Output = '30 Days Of Python'
let task12Answer = challenge.replace(/javascript/gi, 'Python') // using regex expressions of gi to detect all iterations of javascript
console.log(`#12 change ${challenge} to ${task12Output} | ${task12Answer} does result match output? | ${task12Answer == task12Output}`)

console.log(`#13 char as index 15 of ${challenge} is: ${challenge.charAt(15)}`)

/*
14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
*/

console.log(`#14 char code of J in ${challenge} is: ${challenge.charCodeAt(challenge.indexOf('J',0))}`) // position 11, ans 74
console.log(`#15 determine pos of first instance of 'a' in ${challenge} : ${challenge.indexOf('a')}`) // 4
console.log(`#16 determine pos of last instance of 'a' in ${challenge} : ${challenge.lastIndexOf('a')}`) // 14

let task17Example = 'You cannot end a sentence with because because because is a conjunction'
console.log(`#17 sentence: ${task17Example}`)
console.log(`#17 find pos of first occurance of word 'because' : ${task17Example.indexOf('because')}`) // 31
console.log(`#18 find pos of last occurance of word 'because' : ${task17Example.lastIndexOf('because')}`) // 47
console.log(`#19 find pos of first occurance of word 'because' using search : ${task17Example.search('because')}`) // 31 again

let task20Example = ' 30 Days Of JavaScript '
console.log(`#20 remove trailing whitespaces from |${task20Example}| to |${task20Example.trim()}|`)

/*
21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
*/
let task21Example = '*30 Days Of JavaScript*'
console.log(`#21 use startsWith on ${task21Example} and get a true result. Result: ${task21Example.startsWith('*')}`)
console.log(`#22 use endsWith on ${task21Example} and get a true result. Result: ${task21Example.endsWith('*')}`)
console.log(`#23 use match to find all 'a's in ${challenge}: ${challenge.match(/a/g)}`) // find all instances with global [g], add [i] if require insensitive case

let task24String1 = '30 Days Of', task24String2 = 'JavaScript'
console.log(`#24 concat ${task24String1} and ${task24String2} to compare with ${challenge}, is result same as original: ${task24String1.concat(' ' + task24String2) == challenge}`)
console.log(`#25 print ${challenge} twice: ${challenge.repeat(2)}`)

/*
START OF DAY 2 EX. 2 
1. Using console.log() print out the following statement:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```
2. Using console.log() print out the following quote by Mother Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```
*/
console.log(`START OF EXERCISE 2`)
let ex2task1String = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(ex2task1String)
let ex2task2String = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(ex2task2String)
/*
3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5. Check if 'on' is found in both python and jargon
6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
*/
let ex2task3string = '10'
let ex2task3int = 10
console.log(`#3 is typeof string ${ex2task3string} same as int ${ex2task3int}? Result: ${typeof ex2task3string == typeof ex2task3int}`)
console.log(`#3 change string using parse such that typeof results in true. Result: ${typeof parseInt(ex2task3string) == ex2task3int}`)
console.log(`#4 is '9.8' equal to 10? ${parseFloat('9.8') == 10} | After manipulation: ${Math.ceil(parseFloat('9.8')) == 10}`)

let ex2task5string1 = 'python', ex2task5string2 = 'jargon'
console.log(`#5 is 'on' found in python and jargon? Result: ${ex2task5string1.search('on') == ex2task5string2.search('on')}`)

let ex2task6string = 'I hope this course is not full of jargon', ex2task6search = 'jargon'
console.log(`#6 is ${ex2task6search} found within "${ex2task6string}" ? Result: ${ex2task6string.match(ex2task6search) == ex2task6search}`)
/*
7. Generate a random number between 0 and 100 inclusively.
8. Generate a random number between 50 and 100 inclusively.
9. Generate a random number between 0 and 255 inclusively.
*/
console.log(`#7 Generate a random number between 0 and 100 inclusively. ${Math.floor(Math.random() * (100 - 0 + 1)) + 0}`)
console.log(`#8 Generate a random number between 50 and 100 inclusively. ${Math.floor(Math.random() * (100 - 50 + 1)) + 50}`)
console.log(`#9 Generate a random number between 0 and 255 inclusively. ${Math.floor(Math.random() * (255 - 0 + 1)) + 0}`)
/*
10. Access the 'JavaScript' string characters using a random number.
11. Use console.log() and escape characters to print the following pattern.
    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```
12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
*/
let ex2task10string = 'JavaScript', ex2task10random = Math.floor(Math.random() * (ex2task10string.length - 0) + 0)
console.log(`#10 Access the 'JavaScript' string characters using a random number: ${ex2task10string[ex2task10random]}`)
let ex2task11string = `\n1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 `
console.log(`#11 just print the string pepelaugh: ${ex2task11string}`)
let ex2task12string = 'You cannot end a sentence with because because because is a conjunction'
let ex2task12search = 'because because because'
let ex2task12searchpos = ex2task12string.search(ex2task12search)
console.log(`#12 slice out phrase from sentence: ${ex2task12string.substring(ex2task12searchpos, ex2task12searchpos + ex2task12search.length)}`)

