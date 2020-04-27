//object.property
//object.method();


/*
So functions are to do some particular work. For example, when you need to draw a polygon of 3 lines as a part of a vector image it is more convenient to call drawLine thrice than to put all the routine for line drawing inline.

Methods ("member functions") are similar to functions, they belongs to classes or objects and usually expresses the verbs of the objects/class. For example, an object of type Window usually would have methods open and close which do corresponding operations to the object they belong.

Properties are as in everyday language and technically are fields of objects/classes with dedicated getter/setter routines (which can be considered as methods. There are languages that don't have properties and this behavior is achieved using a private field+get/set methods.).

*/
const s1 = 'Hello';
//s1 is a string because its just created as hello
console.log(typeof s1)

const s2 = new String('Hello')
//S2 is an object because you declared a new string
console.log(typeof s2)

//console.log(window);
//window.alert(1);
//alert(1)
 
//console.log(navigator.appVersion);


const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year : '2013',
  getSummary : function(){
    return `${this.title} was written by ${this.authour} in ${this.year}`;
  }
};



const book2 = {
  // Key : Object ,
      // Key : Object,
      //Key : function(){
       // return "Object"
     //         }
  
  title: 'Book One',
  author: 'Jane Doe',
  year : '2016',
  getSummary : function(){
    return '${this.title} was written by ${this.authour} in ${this.year}';
  }
};
//console.log(book1);
//console.log(book1.title)

//console.log(book2.getSummary());
console.log(Object.values(book2)); //Will transform into an array with values
console.log(Object.keys(book2));    //Will tranform into an array with keys 



