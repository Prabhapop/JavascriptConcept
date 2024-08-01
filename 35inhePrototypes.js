// Inheritanceand Prottypes: Create a subClass Magazine that extends the book class with an
// additional property issue add a method to the magazine issue number

class Book {
  constructor(title, author, year, price) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
  }
}

class magazine extends Book {
  constructor(title, author, year, price, issue) {
    super(title, author, year, price);
    this.issue = issue;
  }
  getIssueNumber() {
    return this.issue;
  }
}
const myMagazine = new magazine("yono", "sbi", 1992, 1230, 3);
console.log(myMagazine.getIssueNumber()); // Output: 3
console.log(myMagazine.author);
