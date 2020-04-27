class Book {
    constructor(title, author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} at ${this.year}`;
    }

}

///Magazine Subclass
class Magazine extends Book{
constructor(title,author,year,month){
    //Super is used to go to the parent constructor which is in the book class
    super(title,author,year);
    this.month = month;
}
}





const mag1 = new Magazine('Mag one', 'John Doe', '2018','jan')

console.log(mag1.getSummary())