// CLASS: Create a class representing a Book with properties like title, author and year, Add a
// method to the book class to get the books age(current year - year of publication).

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}
const book1 = new Book("the Alchemist", "Paulo Coelho", 2000);
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

const ageOfBook = book1.getAge();
console.log(ageOfBook);
