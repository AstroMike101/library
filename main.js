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

let mainPage = document.querySelector('.books');
let bookBtn = document.querySelector('.addBookBtn');
let addBookPage = document.querySelector('.addBookPage');






bookBtn.addEventListener('click', () => { 
    createAddBookPage();

})



function createAddBookPage () { 
}




function showAddBookPage () { 

}


function hideBookPage () { 

}



function newCard() { 
    let newdiv  = document.createElement('div');
    newdiv.className+='newBook';
    let info = document.createElement('p');
    info.textContent = "TItle";
    
    newdiv.appendChild(info);
    mainPage.appendChild(newdiv);
    
}

    



// function addBookBtn { 

// }