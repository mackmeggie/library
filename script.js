
let myLibrary =[];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return( `${title}, ${author}, ${pages}, ${read}`)
    }
}

function addBook() {
    let form = document.querySelector('form');
    let newtitle = form.elements.title.value;
    let newauthor = form.elements.author.value;
    let newpages = form.elements.pages.value;
    let newread = form.elements.read.value;
    let newbook = new Book(newtitle, newauthor, newpages, newread);
    myLibrary.push(newbook);
    console.log(myLibrary);
    form.reset();
    displayBooks(myLibrary);
}



function displayBooks(myLibrary) {
    const bookCard = document.querySelector('.bookCard');
    myLibrary.map(input => {
        let newCard = document.createElement('div');
        newCard.classList.add('book');
        newCard.innerHTML = 
        `<p class="title">Title: ${input.title} </p>
        <p class="author">Author: ${input.author} </p>
        <p class="pages">Pages: ${input.pages} </p>
        <p class="read">Read: ${input.read} </p>`;
        bookCard.appendChild(newCard)
    });
}

function openForm() {
    document.getElementById('newbook').style.display = "block";
}

function closeForm() {
    document.getElementById('newbook').style.display = "none";
}
    
displayBooks(myLibrary)


