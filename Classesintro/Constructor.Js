//Constructor


function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} at ${year}`;

    }
}


const newbook = new Book('Book1','John Doe', '2013');
const newbook2 = new Book('Book2', 'Jane Doe','2016');
console.log(newbook2.getSummary)