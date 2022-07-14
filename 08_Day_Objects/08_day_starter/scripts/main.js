console.log(countries)

/*
### Exercises: Level 1

1. Create an empty object called dog
1. Print the the dog object on the console
1. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
1. Get name, legs, color, age and bark value from the dog object
1. Set new properties the dog object: breed, getDogInfo
*/
const dog = {}
console.log(dog)
dog.name = "bobby"
dog.legs = 4
dog.color = "silver"
dog.age = 10 
dog.bark = function() {
    return "woof woof"
}
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

dog.breed = "retriever"
dog.getDogInfo = function() {
    return this
}
console.log(dog.breed)
console.log(dog.getDogInfo())