
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

function displayBooks() {
 //   myLibrary.forEach(element => {
 //       console.log(element)
 //   });

    for (let book of myLibrary) {
        console.log(book)
    }
    }

const alanna = new Book('Alanna: The First Adventure', 'Tamora Pierce', 295, 'Read')
const pooh = new Book('Winnie the Pooh', 'A.A. Milne', 150, 'Read');
const narwhal = new Book('Not Quite Narwhal', 'Jessie Sima', 62, 'Read');

addBook(alanna);
addBook(pooh);
addBook(narwhal);

displayBooks();

console.log()