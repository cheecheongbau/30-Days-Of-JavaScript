// this is your main.js script
/*### Exercises: Level 1

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback 
stating to  wait for the number of years he needs to turn 18.
   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```
*/
let q1Age
console.log(`Enter your age:`)
q1Age=parseInt(prompt())
if(q1Age >= 18)
{
    console.log(`You're old enough to drive`)
}
else
{
    let difference = 18 - q1Age
    console.log(`You are left with ${difference} years to drive.`)
}
/*
. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```
*/

/*
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    - using if else
    - ternary operator.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```
*/
let a = 4
let b = 3
if(a>b) // if 4 > 3
    console.log(`4 is greater than 3`)
else
    console.log(`4 is not greater than 3`)

a>b ? console.log(`4 is greater than 3`) : console.log(`4 is not greater than 3`)
/*
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
    ```
*/
let q4Input = 0
console.log(`Enter a number: `)
q4Input=parseInt(prompt())
q4Input%2 ? console.log(`${q4Input} is an odd number`) : console.log(`${q4Input} is an even number`)
/*
### Exercises: Level 2

1. Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
1. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
1. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
  ```
*/