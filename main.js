let myLibrary = [];

function Book(author,title,pages,status) {
  this.author = author; 
  this.title = title;
  this.pages = pages;
  this.status = status;
}



function addBookToLibrary() { 
  let newdiv  = document.createElement('div');
  newdiv.className+='newBook';
  let bookName = document.createElement('p');
  bookName.textContent = "Book Name: " + myLibrary[0].bookName;
  let authorName = document.createElement('p');
  authorName.textContent = "Author: " + myLibrary[0].authorName;
  let pages = document.createElement('p');
  pages.textContent = "Pages: " + myLibrary[0].pages;
  let readOrNot = document.createElement('p');
  readOrNot.textContent = "Already read?: " + myLibrary[0].readOrNot;
  newdiv.appendChild(bookName);
  newdiv.appendChild(authorName);
  newdiv.appendChild(pages);
  newdiv.appendChild(readOrNot);
  mainPage.appendChild(newdiv);

  
}


let mainPage = document.querySelector('.books'); //main page of website
let addBookPage = document.querySelector('.addBookPage'); //the div that has the form
let bookBtn = document.querySelector('.addBookBtn');  //add book button 
let submitBtn = document.querySelector('#submitBox'); //the submit box in the form 
let mainform = document.querySelector('#mainForm'); //the <form> element



//values for the input forms
let bookName = document.querySelector('#bookName').value; //name of book form value
let authorName = document.querySelector('#authorName').value; // name of author form
let pages = document.querySelector('#pages').value; // # of pages form 
let readOrNot = document.querySelector('#checkbox').value; //checkbox for if read or not 
let allBooks = document.querySelectorAll('.newBook');

console.log(allBooks);

//prevents the submit button from refreshing everything
let formvalues = document.querySelectorAll('.formBoxes'); //forms for book
let readOrNotBox = document.querySelector('#checkbox');
//transform the data inside the forms into an object
mainform.addEventListener('submit', (e) => { 
e.preventDefault();
let newBook = {
  bookName:document.querySelector('#bookName').value, //name of book form value
  authorName:document.querySelector('#authorName').value, // name of author form
  pages:document.querySelector('#pages').value, // # of pages form 
  // readOrNot:document.querySelector('#checkbox').value //checkbox for if read
  readOrNot:document.querySelector('#checkbox').checked.toString().toUpperCase()

}
myLibrary.push(newBook);
formvalues.forEach(formvalues =>  formvalues.value = ''); //resets all forms

console.log(myLibrary);
addBookToLibrary();
myLibrary = [];
})





bookBtn.addEventListener('click', () => { 
    showAddBookPage();
    hideAllBooks();

})

submitBtn.addEventListener('click', () => { 
    hideBookPage();
    showAllBooks();
})




function showAddBookPage () { 
addBookPage.style.display = "flex";
}


function hideBookPage () { 
    addBookPage.style.display = "none";

}

function showAllBooks () { 
  document.querySelectorAll(".newBook").forEach(a=>a.style.display = "block");
}


let book = document.querySelector('.newBook');
function hideAllBooks() { 
  document.querySelectorAll(".newBook").forEach(a=>a.style.display = "none");
}








    

