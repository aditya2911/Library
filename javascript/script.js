let myLibrary = [];
let iterator = 0;

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
   
}

Book.prototype.addBookToLibrary = function (title) {
    iterator++
    myLibrary.push({"title" :this.title ,"author" :this.author,"pages" :this.pages,"status" :this.status});


  

  let card = document.createElement('div');
  card.classList.add("card");

  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('id','delete')

  let cardelements1 = document.createElement("span");
  let cardelements2 = document.createElement("span");
  let cardelements3 = document.createElement("span");
  let cardelements4 = document.createElement("select");
  cardelements4.setAttribute('id',`selection`);

  let option1 = document.createElement('option');
  
  option1.text = 'Read';
  option1.value = 'Read';
  
  let option2 = document.createElement('option');
  
  option2.text = 'Not Read';
  option2.value = 'Not Read';

  cardelements4.appendChild(option1);
  cardelements4.appendChild(option2);
if(this.status == option1.text){
  cardelements4.selectedIndex = 0;
}
else{
    cardelements4.selectedIndex = 1;
}


  cardelements1.textContent =`Title:${this.title}`;
  cardelements2.textContent =`Author:${this.author}`;
  cardelements3.textContent =`Pages:${this.pages}`;
//   cardelements4.textContent =`Status:${this.status}`;
  deleteButton.textContent = 'delete';

  card.appendChild(cardelements1);
  card.appendChild(cardelements2);
  card.appendChild(cardelements3);
  card.appendChild(cardelements4);
  card.appendChild(deleteButton);

  outputContainer.append(card);


  

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

const outputContainer = document.getElementById('Id-output-container');
const deleteButton = document.getElementById('delete');


document.addEventListener('click',(e)=>
    {
    if(e.target && e.target.id =='delete'){
        let parentDiv = e.target.parentNode;
        let cardTitle = parentDiv.firstChild.textContent;
     
        console.log(cardTitle);
        console.log(parentDiv);
    
      

        myLibrary.forEach((element1)=>{
            
                let tempString = `Title:${element1.title}`;
                console.log('tempString :'+tempString);
                if(tempString == cardTitle){
                    console.log('inside loop')
                    myLibrary.pop(element1);
                }

            console.log(element1.title);
        })
        // iterator--
             outputContainer.removeChild(parentDiv);
             console.table(myLibrary);

    }

    if(e.target && e.target.id == 'selection'){

        let parentDiv1 = e.target.parentNode;
        let cardTitle1 = parentDiv1.firstChild.textContent;
     
        console.log(cardTitle1);
        console.log(parentDiv1);
        console.log('selection land')
        let a = e.target.Selection;
        console.log( {a}  );

        
        
        myLibrary.forEach((elementObject)=>{
            let tempString1 = `Title:${elementObject.title}`;
            console.log('tempString :'+tempString1);

            if(tempString1 ==  cardTitle1){
                elementObject.status = e.target.value;
                console.table(myLibrary);
            }
        })
        
    }
    

    }
)



submitButton.addEventListener('click',()=>{
    title1 = inputTitle.value;
    author =  inputAuthor.value;
    pages = inputPages.value;
    statusVar = statusValue.value;
    // console.log({author , title1, pages,statusVar});
  
    let a = new Book(title1,author,pages,statusVar);
    a.addBookToLibrary();
})



