function Book(title, author, pages, year, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
}
let bookList = [];

let rakkBook = new Book("Rakk's Struggle", "Marcello Fitton", 232, 1993);
function addBookToLibrary(book) {
  bookList.push(book);
  let div = document.createElement("div");
  div.classList.add("book-card");
  div.innerHTML = `<p>Title: ${book.title}</>
    <p>Author: ${book.author}</>
    <p>Pages: ${book.pages}</>
    <p>Date Written: ${book.year}</>
    `;
  document.querySelector(".book-container").appendChild(div);

  console.log(book.title, book.author, book.pages, book.year);

}
addBookToLibrary(rakkBook);
addBookToLibrary(new Book("Top Ten Legumes", "Papaya", 200, 2004));
addBookToLibrary(
  new Book("Sleepless in Monatana: A Memoir", "Aaron Jonson", 782, 2022)
);
