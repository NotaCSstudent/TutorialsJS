const pea = (butter) => {
    return butter;
}

//Constructor function
function Person(firstName, lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;

    
}

console.log(pea(34))


const person1 = new Person('John','Doe', '4-3-1980');

console.log(person1);
