let newBookForm = document.querySelector("#new-book-form");
let formContainer = document.querySelector(".form-container");
let deleteContainer = document.querySelector(".delete-container");
let noButton = document.querySelector(".no-button");
let yesButton = document.querySelector(".yes-button");
let addCard = document.querySelector(".add-card");
let formCloseButton = document.querySelector(".x-button");
let bookId;

//INITIAL DUMMY CONTENT
let rakkBook = new Book("Rakk's Struggle", "Marcello Fitton", 232, 1993);
addBookToLibrary(rakkBook);
addBookToLibrary(new Book("Top Ten Legumes", "Papaya", 200, 2004));
addBookToLibrary(
  new Book("Sleepless in Montana: A Memoir", "Aaron Jonson", 782, 2022)
);

//NEW BOOK CONSTRUCTOR
function Book(title, author, pages, year, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.id = Math.floor(Math.random() * 1000);
}
let bookList = [];

//ADD BOOK TO LIBRARY
function addBookToLibrary(book) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  //BOOK CARD CONTENT

  //title
  let titleSection = document.createElement("div");
  titleSection.classList.add("title-container");
  let cardTitle = document.createElement("div");
  cardTitle.textContent = `${book.title}`;
  cardTitle.classList.add("card-title");
  titleSection.appendChild(cardTitle);

  //CARD INFO
  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  //author
  let authorSection = document.createElement("div");
  authorSection.classList.add("object-property-value");
  let authorLeft = document.createElement("div");
  authorLeft.classList.add("property");
  authorLeft.textContent = "Author: ";
  let authorRight = document.createElement("div");
  authorRight.textContent = `${book.author}`;
  authorRight.classList.add("value");

  authorSection.appendChild(authorLeft);
  authorSection.appendChild(authorRight);

  //pages
  let pagesSection = document.createElement("div");
  pagesSection.classList.add("object-property-value");
  let pagesLeft = document.createElement("div");
  pagesLeft.textContent = "Pages: ";
  pagesLeft.classList.add("property");
  let pagesRight = document.createElement("div");
  pagesRight.textContent = `${book.pages}`;
  pagesRight.classList.add("value");

  pagesSection.appendChild(pagesLeft);
  pagesSection.appendChild(pagesRight);

  //date
  let dateSection = document.createElement("div");
  dateSection.classList.add("object-property-value");
  let dateLeft = document.createElement("div");
  dateLeft.textContent = "Date: ";
  dateLeft.classList.add("property");
  let dateRight = document.createElement("div");
  dateRight.textContent = `${book.year}`;
  dateRight.classList.add("value");

  dateSection.appendChild(dateLeft);
  dateSection.appendChild(dateRight);

  //BUTTONS
  let buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("card-buttons");
  //edit
  let editButton = document.createElement("img");
  editButton.classList.add("edit-button");
  editButton.setAttribute("src", "edit.png");
  editButton.setAttribute("bookId", `${book.id}`);
  editButton.addEventListener("click", () => {
    console.log("EDIT ME");
  });
  //delete
  let deleteButton = document.createElement("img");
  deleteButton.classList.add("delete-button");
  deleteButton.setAttribute("src", "delete.png");
  deleteButton.setAttribute("bookId", `${book.id}`);
  deleteButton.addEventListener("click", () => {
    bookId = book.id;
    console.log("DELETE ME", bookId);
    deleteContainer.classList.remove("hide");
  });

  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(deleteButton);

  bookCard.setAttribute("id", `${book.id}`);

  bookCard.appendChild(titleSection);
  cardInfo.appendChild(authorSection);
  cardInfo.appendChild(pagesSection);
  cardInfo.appendChild(dateSection);
  bookCard.appendChild(cardInfo);
  bookCard.appendChild(buttonsDiv);
  document.querySelector(".book-container div:first-child").after(bookCard);
}

//ADD CARD BUTTON
addCard.addEventListener("click", (e) => {
  addCard.classList.add("active");
  formContainer.classList.remove("hide");
});
addCard.addEventListener("transitionend", (e) => {
  addCard.classList.remove("active");
});

//NO BUTTON ON DELETE CONTAINER
noButton.addEventListener("click", (e) => {
  console.log("NO", bookId);
  document.querySelector(".delete-container").classList.add("hide");
});
//YES BUTTON ON DELETE container

yesButton.addEventListener("click", () => {
  console.log("YES DELETE THIS BOOK", bookId);
  let elementedToBeDeleted = document.getElementById(`${bookId}`);
  elementedToBeDeleted.remove();
  console.log(elementedToBeDeleted);
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
//FORM X BUTTON BUTTON
formCloseButton.addEventListener("click", () => {
  formContainer.classList.add("hide");
});
