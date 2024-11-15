class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const book = new Book('Everyone has a story', 
    'Savi Sharma');

console.log("Title : " + book.title);
console.log("Author : " +book.author);