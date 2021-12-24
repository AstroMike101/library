let myLibrary = [];

function Book(author,title,pages,status) {
  this.author = author; 
  this.title = title;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  // do stuff here

}


// function displayBooks { 

// }

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

//function that creates a new book whenever submit is clicked
// submitBtn.addEventListener('click', () => { 
//   console.log(authorName);
//  let book2= new Book((authorName,bookName,pages,readOrNot));
//  console.log(book2);

// })

//prevents the submit button from refreshing everything
let formvalues = document.querySelectorAll('.formBoxes');
//transform the data inside the forms into an object
mainform.addEventListener('submit', (e) => { 
e.preventDefault();
let newBook = {
  bookName:document.querySelector('#bookName').value, //name of book form value
  authorName:document.querySelector('#authorName').value, // name of author form
  pages:document.querySelector('#pages').value, // # of pages form 
  readOrNot:document.querySelector('#checkbox').value //checkbox for if read

}
myLibrary.push(newBook);
formvalues.forEach(formvalues =>  formvalues.value = '');
console.log(myLibrary);
newCard();
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
for (var i=0;i<allBooks.length;i+=1){
  allBooks[i].style.display = 'flex';
}
}

function hideAllBooks() { 

for (let i=0;i<allBooks.length;i+=1){
  allBooks[i].style.display = "none";
}
}



function newCard() { 
    let newdiv  = document.createElement('div');
    newdiv.className+='newBook';
    let bookName = document.createElement('p');
    bookName.textContent = myLibrary[0].bookName;
    let authorName = document.createElement('p');
    authorName.textContent = myLibrary[0].authorName;
    let pages = document.createElement('p');
    pages.textContent = myLibrary[0].pages;
    let readOrNot = document.createElement('p');
    readOrNot.textContent = myLibrary[0].readOrNot;
    newdiv.appendChild(bookName);
    newdiv.appendChild(authorName);
    newdiv.appendChild(pages);
    newdiv.appendChild(readOrNot);
    mainPage.appendChild(newdiv);

    
}



    



// function addBookBtn { 

// }