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

// Show Alert
 UI.prototype.showAlert = function(message, className) {
    // Create div
    const div = document.createElement('div');

    // Add classes
    div.className = `alert ${className}`;
   
    // Add text
    div.appendChild(document.createTextNode(message));
    
    // Get parent
    const container = document.querySelector('.container');

    // Get form
    const form = document.querySelector('#book-form');
    
    // Insert alert
    container.insertBefore(div, form);
    // Timeout after 3 sec
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
 }

//  Delete Book
UI.prototype.deleteBook = (target) => {
    if(target.className  === 'delete'){
        target.parentElement.parentElement.remove();

    }
}

// Clear Fields
UI.prototype.clearFields = () =>{
    document.getElementById('title').value = ``;
    document.getElementById('author').value = ``;
    document.getElementById('isbn').value = ``;
}

//  Event Listner for add Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn= document.getElementById('isbn').value;

    // Instatiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '' ){
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
                // Add book to list
                ui.addBookToolist(book);

                // Show success
                ui.showAlert('Book Added!', 'success')
    
                // Clear fields
                ui.clearFields()
    }

    e.preventDefault();

});


// Even Listner for delete
document.getElementById('book-list').addEventListener('click', (e) => {

        // Instantiate UI
        const ui = new UI();

        ui.deleteBook(e.target);

        // Show messagee
        ui.showAlert('Book Removed!', 'removed')

    e.preventDefault();
});