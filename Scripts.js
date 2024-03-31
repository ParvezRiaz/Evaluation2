function handleFormSubmit(event){
  event.preventDefault();
  const bookName = document.getElementById("bookName").value;
  const authorName = document.getElementById("authorName").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const addedDate = document.getElementById("addedDate").value;
  const bookCategory = document.getElementById("bookCategory").value;




const book = {
    name : bookName,
    author : authorName,
    description : bookDescription,
    addedDate : addedDate,
    category : bookCategory

};

let bookList = JSON.parse(localStorage.getItem('book-list')) || [];

bookList.push(book);

localStorage.setItem('book-list' , JSON.stringify(bookList));

alert('Book added sucessfully')

document.getElementById('bookForm').reset() ;

}

document.getElementById('bookForm').addEventListener('submit',handleFormSubmit);


document.addEventListener("DOMContentLoaded", function ()) {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  const displayBooks = (books) => {
    const tableBody = document.getElementById("book-list");
    tableBody.innerHTML = "";
    books.forEach((book) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.description}</td>
                <td>${book.addedDate}</td>
                <td>${book.category}</td>
                <td>${book.price}</td>
                <td><button class="buy-btn" data-id="${book.id}">Buy</button></td>
                <td><button class="bookmark-btn" data-id="${book.id}">Bookmark</button></td>
            `;
      tableBody.appendChild(row);
    });
    document.getElementById("book-count").textContent = books.length;
  };

  displayBooks(books);

  document
    .getElementById("category-filter")
    .addEventListener("change", function () {
      const selectedCategory = this.value;
      const filteredBooks = selectedCategory
        ? books.filter((book) => book.category === selectedCategory)
        : books;
      displayBooks(filteredBooks);
    });}
