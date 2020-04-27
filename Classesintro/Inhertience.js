
//CONSTRUCTOR
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  
};



//get summary prototype
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} at ${this.year}`;
};


//Magazine Constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;

}


//Inherit protoype
Magazine.prototype = Object.create(Book.prototype)




//Instantiate Magazine Object


const mag1 = new Magazine('Mag one', 'Jone Doe ', '2018', 'Jan');



//User Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary())