
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

function addBook(x) {
    let extrabook = myLibrary.push(x)
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
    
const alanna = new Book('Alanna: The First Adventure', 'Tamora Pierce', 295, 'Read')
const pooh = new Book('Winnie the Pooh', 'A.A. Milne', 150, 'Read');
const narwhal = new Book('Not Quite Narwhal', 'Jessie Sima', 62, 'Read');

addBook(alanna);
addBook(pooh);
addBook(narwhal);

displayBooks(myLibrary)


