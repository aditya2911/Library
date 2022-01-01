let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.addBookToLibrary = function (title) {
    myLibrary.push({"title" :this.title});
    myLibrary.push({"author" :this.author});

    myLibrary.push({"pages" :this.pages});

    myLibrary.push({"status" :this.status});

  

    console.log(this.myLibrary);

}

let title1;
let author;
let pages;
let statusVar;

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');

const statusValue = document.querySelector('#status');
const submitButton  = document.querySelector('[data-submit]');


submitButton.addEventListener('click',()=>{
    title1 = inputTitle.value;
    author =  inputAuthor.value;
    pages = inputPages.value;
    statusVar = statusValue.value;
    console.log({author , title1, pages,statusVar});
  
    let a = new Book(title1,author,pages,statusVar);
    a.addBookToLibrary();
})
// let a = new Book("aditya", "salunke", "123", "read");
// a.addBookToLibrary();

// let b = new Book("ariba", "sunke", "11233", "not read");
// b.addBookToLibrary();



