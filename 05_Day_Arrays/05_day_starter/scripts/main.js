console.log(countries)

/*
1. Declare an _empty_ array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
*/
let arr1 = Array()
let arr2 = [1, 2, 3, 4, 5]
let arr2_1 = Array(5) // empty
let arr2_2 = Array(5).fill(`Lmao`) // 5 slots of lmao

console.log(arr1)
console.log(arr2, arr2.length)
console.log(arr2[0], arr2[(arr2.length-1)/2], arr2[arr2.length-1])
/*
5. Declare an array called _mixedDataTypes_, put different data types in the 
array and find the length of the array. 
The array size should  be greater than 5
6. Declare an array variable name itCompanies and assign initial values 
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using _console.log()_
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
*/
let mixedDataTypes = Array()
mixedDataTypes.push(5)
mixedDataTypes.push(`string`)
mixedDataTypes.push(true)
mixedDataTypes.push(5.1)
mixedDataTypes.push(null)
console.log(mixedDataTypes, mixedDataTypes.length)
/*
11. Change each company name  to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, 
IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using _sort()_ method
*/
let companies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
let companiesUppercase = []
let printCompaniesStr = ''
for(let i = 0; i < companies.length; ++i)
    companiesUppercase.push(companies[i].toUpperCase())
console.log(companiesUppercase)
console.log(companies.join(', ') + ` are big IT companies.`)

/*
16. Reverse the array using _reverse()_ method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies
*/