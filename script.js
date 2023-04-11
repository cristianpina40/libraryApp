var addNewBook = document.getElementById('fContainer');

let place = 0;

let myLibrary = [];

function Book(title, author, pages) {

    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addNew(){
    var formData = new FormData(addNewBook);
    var title = formData.get("newTitle");
    var author = formData.get("newAuthor");
    var pages = formData.get('newPages');
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

}

function addBookToLibrary(){

    let length = myLibrary.length; 

    for(let i = place; i < length; i++)
    {


        let parentDiv = document.getElementById('main'); // get the parent element
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        parentDiv.appendChild(cardDiv); 

        let nameDiv = document.createElement('div');
        nameDiv.className = 'bname';
        cardDiv.appendChild(nameDiv);
        let namePara = document.createElement('p');
        namePara.className = "bookName";
        namePara.innerHTML =  myLibrary[i].title;
        nameDiv.appendChild(namePara);

        let authorDiv = document.createElement('div');
        authorDiv.className = "bauthor";
        cardDiv.appendChild(authorDiv);
        let authorPara = document.createElement('p');
        authorPara.className = "bookAuthor";
        authorPara.innerHTML = myLibrary[i].author;
        authorDiv.appendChild(authorPara);

        let pagesDiv = document.createElement('div');
        pagesDiv.className = 'bpages';
        cardDiv.appendChild(pagesDiv);
        let pagesPara = document.createElement('p');
        pagesPara.className = "bookPages";
        pagesPara.innerHTML =  myLibrary[i].pages;
        pagesDiv.appendChild(pagesPara);

        let readButton = document.createElement('button');
        readButton.style.backgroundColor = 'lightcoral';
        readButton.textContent = 'Not Read'; 
        readButton.className = 'readOrNot';
        cardDiv.appendChild(readButton);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; 
        removeButton.className = 'remove';
        cardDiv.appendChild(removeButton);

        removeButton.addEventListener('click', (e) =>{

            e.currentTarget.parentNode.remove();
          });

        readButton.addEventListener('click', (e) =>{

           if(e.currentTarget.style.backgroundColor === 'lightcoral')
           {
                e.currentTarget.style.backgroundColor = 'lightgreen';
                e.currentTarget.textContent = 'Read'
           }
           else if(e.currentTarget.style.backgroundColor === 'lightgreen')
           {
                e.currentTarget.style.backgroundColor = 'lightcoral';
                e.currentTarget.textContent = 'Not Read'
           }
           else{
                e.currentTarget.style.backgroundColor = 'lightcoral';
                e.currentTarget.textContent = 'Not Read'
           }
           

        });
    }

    place++;

}

addNewBook.addEventListener('submit', (event) =>{
    
    event.preventDefault();
    addNew();
    addBookToLibrary();
    closeForm();

});



function openForm() {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }



