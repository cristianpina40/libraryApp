var addNewBook = document.getElementById('fContainer');

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

    for(let i = 0; i < length; i++)
    {
        console.log(myLibrary[i].title);
        console.log(myLibrary[i].author);
        console.log(myLibrary[i].pages);
    }


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

