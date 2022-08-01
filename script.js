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
  div.innerHTML = `<div class="card-title">${book.title}</div>
  <div class="card-info">
      <div class="object-property-value"><div class="property">Author:</div><div class="value"> ${book.author}</div></div>
      <div class="object-property-value"><div class="property">Pages:</div><div class="value"> ${book.pages}</div></div>
      <div class="object-property-value"><div class="property">Date Written:</div><div class="value"> ${book.year}</div></div>
  </div>
  <div class="card-buttons"><button class="">1</button><button class="">2</button><button class="">3</button></div>
    `;
  document.querySelector(".book-container").appendChild(div);

  console.log(book.title, book.author, book.pages, book.year);
}

document.querySelector(".add-card").addEventListener("click", (e) => {
    document.querySelector(".add-card").classList.add("active");
  });
  document.querySelector(".add-card").addEventListener("transitionend", (e) => {
    document.querySelector(".add-card").classList.remove("active");
  });
  

addBookToLibrary(rakkBook);
addBookToLibrary(new Book("Top Ten Legumes", "Papaya", 200, 2004));
addBookToLibrary(
  new Book("Sleepless in Montana: A Memoir", "Aaron Jonson", 782, 2022)
);

