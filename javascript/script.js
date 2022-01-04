
// array which will store object of books
let myLibrary = [];


// helper function to check if the text box data is empty

function isEmpty(str) {
    return !str.trim().length;
}

// helper function to check if the text box data is number


function isNumber(number) {
    let a = parseInt(number)
    return a;
}

// check the array to make sure if the book exist and if it exist alert the client about it
function BookAlreadyExist(bookTitle) {
    return myLibrary.some((bookCard) => (bookCard.title === bookTitle));


}


// object book with parameter
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

}

// definiing Book method and adding it using prototype

Book.prototype.addBookToLibrary = function (title) {

    // vaidating inputdata
    if (isEmpty(this.title)) { alert("title field is empty"); return; }
    if (isEmpty(this.author)) { alert("author field is empty"); return; }
    if (isEmpty(this.pages)) { alert("page field is empty"); return; }
    if (!isNumber(this.pages)) { alert("please input only a  number in page field"); return; }


    // check if the book already exist 
    let bookChecker = BookAlreadyExist(this.title);
    if (bookChecker == true) { alert('book already exist'); return; }



    // pushes the data into the array
    myLibrary.push({ "title": this.title, "author": this.author, "pages": this.pages, "status": this.status });




    // create a DOM element to be displayed 
    let card = document.createElement('div');
    card.classList.add("card");

    // creates a delete button
    let deleteButton = document.createElement('button');

    //set it's ID
    deleteButton.setAttribute('id', 'delete')


    // span element to show data
    let cardelements1 = document.createElement("span");
    let cardelements2 = document.createElement("span");
    let cardelements3 = document.createElement("span");

    let cardelements4 = document.createElement("select");
    cardelements4.setAttribute('id', `selection`);

    // option DOM element to allow user to change the reading status
    let option1 = document.createElement('option');

    option1.text = 'Read';
    option1.value = 'Read';

    let option2 = document.createElement('option');

    option2.text = 'Not Read';
    option2.value = 'Not Read';


    // appending the option to select element
    cardelements4.appendChild(option1);
    cardelements4.appendChild(option2);

    // set the default value
    if (this.status == option1.text) {
        cardelements4.selectedIndex = 0;
    }
    else {
        cardelements4.selectedIndex = 1;
    }


    // setting text data
    cardelements1.textContent = `Title:${this.title}`;
    cardelements2.textContent = `Author:${this.author}`;
    cardelements3.textContent = `Pages:${this.pages}`;
    deleteButton.textContent = 'delete';


    // appending it to card container
    card.appendChild(cardelements1);
    card.appendChild(cardelements2);
    card.appendChild(cardelements3);
    card.appendChild(cardelements4);
    card.appendChild(deleteButton);


    // appending card container to main output container
    outputContainer.append(card);




}



//  variable
let title1;
let author;
let pages;
let statusVar;

// get the HTML element 

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');

const statusValue = document.querySelector('#status');
const submitButton = document.querySelector('[data-submit]');

const outputContainer = document.getElementById('Id-output-container');
const deleteButton = document.getElementById('delete');


// check if the user has clicked and check if the e.target ID's is equal to value specified
document.addEventListener('click', (e) => {

    // check if the delete button is pressed
    if (e.target && e.target.id == 'delete') {

        // get the parent node
        let parentDiv = e.target.parentNode;

        // get the parent node's first child text content
        let cardTitle = parentDiv.firstChild.textContent;



        // delete the object from the array
        myLibrary.forEach((element1) => {


            let arrayIndex = myLibrary.indexOf(element1);

            let tempString = `Title:${element1.title}`;
            if (tempString == cardTitle) {
                myLibrary.splice(arrayIndex, 1);
            }

        })
        // remove the book card
        outputContainer.removeChild(parentDiv);


    }


    // check if the drop down option is selected , if selected than changes its 
    //status value in array
    if (e.target && e.target.id == 'selection') {

        let parentDiv1 = e.target.parentNode;
        let cardTitle1 = parentDiv1.firstChild.textContent;
        let selectionElement = e.target;
        let a = e.target.Selection;


        selectionElement.addEventListener('change', () => {
            myLibrary.forEach((elementObject) => {
                let tempString1 = `Title:${elementObject.title}`;

                if (tempString1 == cardTitle1) {
                    elementObject.status = e.target.value;

                }
            })
        })


    }


}
)


// event listener on submit button to send the input value onto the contructor;
submitButton.addEventListener('click', () => {
    title1 = inputTitle.value;
    author = inputAuthor.value;
    pages = inputPages.value;
    statusVar = statusValue.value;

    let a = new Book(title1, author, pages, statusVar);
    a.addBookToLibrary();
})



