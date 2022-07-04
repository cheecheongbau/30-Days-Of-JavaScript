// this is your main.js script

/*### Exercises: Level 1
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.
*/
let firstName = 'Baudric', lastName = 'Chia', country = 'SG', city = 'Singapore', 
age = 26, isMarried = false, year = 1996
console.log(`#1 declare variables, assign values and check data type`)
console.log(`firstName type: ${typeof firstName}`)
console.log(`lastName type: ${typeof lastName}`)
console.log(`country type: ${typeof country}`)
console.log(`city type: ${typeof city}`)
console.log(`age type: ${typeof age}`)
console.log(`isMarried type: ${typeof isMarried}`)
console.log(`year type: ${typeof year}`)

console.log(`#2 check if '10' == 10 : ${'10' == 10}` )
console.log(`#3 check if parseInt('9.8') is equal to 10 : ${parseInt('9.8') == 10}` )
console.log(`#4.1 3 statements with truthy values :non 0 values 15 != 0 | 'a' != 0 | -55 != 0` )
console.log(`#4.2 3 statements with falsy values : return 0 | return null | return undefined`)
/*
5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4 // compare value and data type
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4' // compare value, same thing
   11. 4 === '4' // val and data type, different!
   12. Find the length of python and jargon and make a falsy comparison statement.
*/
let var1 = 'python', var2 = 'jargon'
console.log(`1. 4 > 3 : true | ${4>3}
2. 4 >= 3 : true | ${4>=3}
3. 4 < 3 : false | ${4<3}
4. 4 <= 3 : false | ${4<=3}
5. 4 == 4 : true | ${4==4}
6. 4 === 4 : true | ${4===4} 
7. 4 != 4 : false | ${4!=4}
8. 4 !== 4 : false | ${4!==4}
9. 4 != '4' : false | ${4!='4'}
10. 4 == '4' : true | ${4=='4'}
11. 4 === '4' : false | ${4==='4'}
12. Find the length of python and jargon and make a falsy comparison statement. | false 
Length of python ${var1.length}
Length of jargon ${var2.length}
comparison statement python == jargon ${var1 == var2}`)

/*
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python
*/
let var3 = 'dragon', var4 = 'python'
console.log(`1. 4 > 3 && 10 < 12 : true true = true| ${4 > 3 && 10 < 12}
2. 4 > 3 && 10 > 12 : true false = false| ${4 > 3 && 10 > 12}
3. 4 > 3 || 10 < 12 : true = true| ${4 > 3 || 10 < 12}
4. 4 > 3 || 10 > 12 : true = true| ${4 > 3 || 10 > 12}
5. !(4 > 3) : negate true = false| ${!(4 > 3)}
6. !(4 < 3) : negate false = true| ${!(4 < 3)}
7. !(false) : negate false = true| ${!(false)}
8. !(4 > 3 && 10 < 12) : negate(true true = true) = false| ${!(4 > 3 && 10 < 12)}
9. !(4 > 3 && 10 > 12) : negate(true false = false) = true| ${!(4 > 3 && 10 > 12)}
10. !(4 === '4') : negate(false) = true| ${!(4 === '4')}
11. There is no 'on' in both dragon and python : false| ${!(var3.search('on') == var4.search('on'))}`)

/*
7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const currDate = new Date()
console.log(`
1. What is the year today? ${currDate.getFullYear()}
2. What is the month today as a number? ${currDate.getMonth()}
3. What is the date today? ${currDate.getDate()}
4. What is the day today as a number? ${currDate.getDay()}
5. What is the hours now? ${currDate.getHours()}
6. What is the minutes now? ${currDate.getMinutes()}
7. Find out the numbers of seconds elapsed from January 1, 1970 to now. ${currDate.getTime()}`)

/*
1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```

2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```
*/
let pBase, pHeight
console.log(`Enter desired base `); pBase = prompt()
console.log(`Enter desired height`);  pHeight = prompt()
console.log(`Area of Triangle: ${pBase} * ${pHeight} = ${0.5*pBase*pHeight}`)

let pSideA, pSideB, pSideC
console.log(`Enter desired length of Side A`); pSideA=parseInt(prompt())
console.log(`Enter desired length of Side B`); pSideB=parseInt(prompt())
console.log(`Enter desired length of Side C`); pSideC=parseInt(prompt())
console.log(`The perimeter of Triangle = ${pSideA} + ${pSideB} + ${pSideC} = ${pSideA + pSideB + pSideC}`)
/*
3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
7. Compare the slope of above two questions.
8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
*/
let pLength, pWidth
console.log(`Enter desired length of rectangle`); pLength=parseInt(prompt())
console.log(`Enter desired width of rectangle`); pWidth=parseInt(prompt())
console.log(`Area of Rectangle: ${pLength} * ${pWidth} = ${pLength * pWidth} | Perimeter of Rectangle: 2 * (${pLength} + ${pWidth}) = ${2 * (pLength + pWidth)}`)
// skip 4

let slope = 2, y = 0, x = 0, yIntercept = 0, xIntercept = 0
// if x = 0
yIntercept = 2*0 -2 // [0,-2]
xIntercept = 2/2 // [1, 0]


/*
9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

10. If the length of your name is greater than 7 say, your name is long else say your name is short.
11. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

12. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```

15. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm
*/