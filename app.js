// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

UI.prototype.addBookToolist = function(book){
    const lsit = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');

    // Insert cols
    row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
    <td> ${book.isbn} </td>
    <td><a href="#" class="delete">X<a></td>
    `
    lsit.appendChild(row);

}

// Clear Fields
UI.prototype.clearFields = () =>{
    document.getElementById('title').value = ``;
    document.getElementById('author').value = ``;
    document.getElementById('isbn').value = ``;
}

//  Event Listeners
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn= document.getElementById('isbn').value;

    // Instatiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Add book to list
    ui.addBookToolist(book);
    
    // Clear fields
    ui.clearFields()
    
    
    
    e.preventDefault();

});



