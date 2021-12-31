let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.myLibrary = [];
}

Book.prototype.addBookToLibrary = function (title) {
    this.myLibrary["title"] = this.title;
    this.myLibrary["author"] = this.author;

    this.myLibrary["pages"] = this.pages;
    this.myLibrary["status"] = this.status;

    console.log(this.myLibrary);

}


let a = new Book("aditya", "salunke", "123", "read");
a.addBookToLibrary();

let b = new Book("ariba", "sunke", "11233", "not read");
b.addBookToLibrary();



