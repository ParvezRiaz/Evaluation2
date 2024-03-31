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
    category : bookCategory,

};

let bookList = JSON.parse(localStorage.getItem('book-list')) || [];

bookList.push(book);

localStorage.setItem('book-list' , JSON.stringify(bookList));

alert('Book added sucessfully')

document.getElementById('bookForm').reset() ;

}

document.getElementById('bookForm').addEventListener('submit',handleFormSubmit);