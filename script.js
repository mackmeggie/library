//Library array
let myLibrary =[];

//Book object
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        console.log( `${title}, ${author}, ${pages}, ${read}`)
    }
}

//Alters read data
Book.prototype.changeRead = function(indexy) {
    
    if (this.read === "Read") {
        this.read = "Unread" ;
        console.log(this.read) 
    }
    else {
        this.read = "Read";
        console.log(this.read)  
    }
    removeCards();
    displayBooks(myLibrary);
}

function changeRead(indexy) {
    let index = myLibrary[indexy]
    myLibrary.forEach ((Book, index) => {
        if (indexy === index){
        Book.changeRead(index);
    }})
}

//Pre-existing books in library array
let alanna = new Book("Alanna: The First Adventure", "Tamora Pierce", 295, "Read");
myLibrary.push(alanna);
let narwhal = new Book("Not Quite Narwhal", "Jessie Sima", 64, "Read");
myLibrary.push(narwhal);
let odyssey = new Book('The Odyssey', "Homer", 357, "Read");
myLibrary.push(odyssey);

//Takes form input, creates new book object and places into library array
//Updates display to include new book
function addBook() {
    let form = document.querySelector('form');
    let newtitle = form.elements.title.value;
    let newauthor = form.elements.author.value;
    let newpages = form.elements.pages.value;
    let newread = form.elements.read.value;
    let newbook = new Book(newtitle, newauthor, newpages, newread);
    myLibrary.push(newbook);
    form.reset();
    removeCards();
    displayBooks(myLibrary);
}

//Displays library objects in individual divs on screen
function displayBooks(myLibrary) {
    const bookCard = document.querySelector('.bookCard');
     myLibrary.forEach((input, index) => {
        let newCard = document.createElement('div');
        newCard.classList.add('book');
        newCard.setAttribute('id', index)
        newCard.innerHTML = 
        `<p class="title">Title: ${input.title} </p>
        <p class="author">Author: ${input.author} </p>
        <p class="pages">Pages: ${input.pages} </p>
        <p class="read" id="read${index}">Read: ${input.read} </p>
        <button class="remove" onclick="removeBook(${index})">Remove Book</button>
        <button class ="status" onclick="changeRead(${index})">Change Read Status</button>`
        bookCard.appendChild(newCard)       
    });
}


//Remove all books from display
function removeCards() {
    const bookCard = document.querySelector('.bookCard');
    const book = document.querySelectorAll('.book');
    while (bookCard.firstChild) {
        bookCard.lastChild.remove();
    }
}  

//Remove individual books from library array
const removeBook = function(indexy) {
    console.log('I got something', indexy);
    let remove = myLibrary.splice(indexy, 1);
    removeCards();
    displayBooks(myLibrary);
}

//Opens hidden add book form
function openForm() {
    document.getElementById('newbook').style.display = "block";
}

//Closes add book form
function closeForm() {
    document.getElementById('newbook').style.display = "none";
}
   

displayBooks(myLibrary)


