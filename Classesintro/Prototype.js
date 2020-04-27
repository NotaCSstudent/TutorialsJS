

//CONSTRUCTOR
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  
};



//get summary prototype
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} at ${year}`;
}


//getAge

Book.prototype.GetAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
}




//Revised change year

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised=true;
}


//Initiate Object
const book1 = new Book('Book1','John Doe', '2013');
const book2 = new Book('Book2', 'Jane Doe','2016');
//console.log(book2.GetAge())


//Before it gets Revised
console.log(book2)
//Changes the year of the book
book2.revise('2018')
//After it get revised
console.log(book2)