let newBookForm = document.querySelector("#new-book-form");
let formContainer = document.querySelector(".form-container");
let deleteButton = document.querySelector(".delete-button");
let deleteContainer = document.querySelector(".delete-container");
let noButton = document.querySelector(".no-button");
let addCard = document.querySelector(".add-card");

function Book(title, author, pages, year, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
}
let bookList = [];

function addBookToLibrary(book) {
  bookList.push(book);
  let div = document.createElement("div");
  div.classList.add("book-card");
  div.innerHTML = `<div class="title-container"><div class="card-title">${book.title}</div></div>
  <div class="card-info">
      <div class="object-property-value"><div class="property">Author:</div><div class="value"> ${book.author}</div></div>
      <div class="object-property-value"><div class="property">Pages:</div><div class="value"> ${book.pages}</div></div>
      <div class="object-property-value"><div class="property">Date Written:</div><div class="value"> ${book.year}</div></div>
  </div>
  <div class="card-buttons"><img class="edit-button"src="/edit.png" alt="edit"><img class="delete-button"src="/delete.png" alt="delete"></div>
    `;
  document.querySelector(".book-container").appendChild(div);

  console.log(book.title, book.author, book.pages, book.year);
}
//ADD CARD BUTTON
addCard.addEventListener("click", (e) => {
  addCard.classList.add("active");
  formContainer.classList.remove("hide");
});
addCard.addEventListener("transitionend", (e) => {
  addCard.classList.remove("active");
});

let rakkBook = new Book("Rakk's Struggle", "Marcello Fitton", 232, 1993);
addBookToLibrary(rakkBook);
addBookToLibrary(new Book("Top Ten Legumes", "Papaya", 200, 2004));
addBookToLibrary(
  new Book("Sleepless in Montana: A Memoir", "Aaron Jonson", 782, 2022)
);

//DELETE BUTTON ON CARD
deleteButton.addEventListener("click", () => {
  deleteContainer.classList.remove("hide");
});

noButton.addEventListener("click", () => {
  console.log("NO");
  document.querySelector(".delete-container").classList.add("hide");
});

//SUBMIT BUTTON ON FORM CONTAINER
newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let form = document.querySelector(".form-container");
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let year = document.querySelector("#year").value;
  addBookToLibrary(new Book(title, author, pages, year));
  title = "";
  form.classList.add("hide");
  let inputFields = form.querySelectorAll(".input-field");
  for (i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
  }
  form.reset();
  console.log(title, author, pages, year);
});
