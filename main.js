let myLibrary = [];
let librarySaved = [];



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




function addBookToLibrary() { 
  let newdiv  = document.createElement('div');
  newdiv.className+='newBook';
  let bookName = document.createElement('p');
  bookName.textContent = "Book Name: " + myLibrary[0].bookName;
  let authorName = document.createElement('p');
  authorName.textContent = "Author: " + myLibrary[0].authorName;
  let pages = document.createElement('p');
  pages.textContent = "Pages: " + myLibrary[0].pages;
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  bookName.classList.add('info');
  authorName.classList.add('info');
  pages.classList.add('info');
  readBtn.classList.add('readBtn');
  removeBtn.classList.add('removeBtn');
  removeBtn.textContent = 'Remove'; 


  removeBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove()
  });

  readBtn.addEventListener('click', () => {
    if(readBtn.classList.contains('active')) {
      readBtn.classList.remove('active');
      readBtn.classList.add('inactive');
      readBtn.textContent = 'Not Read';
      
    }else { 
      readBtn.classList.remove('inactive');
      readBtn.classList.add('active');
      readBtn.textContent = "READ";
    }
  })

  if(myLibrary[0].readOrNot === "FALSE") {
    readBtn.textContent = 'Not Read';
    readBtn.style.backgroundColor = '#e04f63';
}else {
    readBtn.textContent = "READ";
    readBtn.style.backgroundColor = '#63da63'
    readBtn.classList.add('active');
}


  newdiv.appendChild(bookName);
  newdiv.appendChild(authorName);
  newdiv.appendChild(pages);
  newdiv.appendChild(readBtn);
  newdiv.appendChild(removeBtn);
  mainPage.appendChild(newdiv);

  
}






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
librarySaved.push(newBook);
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





    

