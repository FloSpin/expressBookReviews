const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  res.send(books[isbn]);

 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;  // Get the author from request parameters
    const bookKeys = Object.keys(books);  // Get all book keys
    
    const matchingBooks = bookKeys
        .map(key => books[key])  // Map keys to book objects
        .filter(book => book.author === author);  // Filter books by author

    if (matchingBooks.length > 0) {
        res.status(200).json(matchingBooks);  // Return matching books if found
    } else {
        res.status(404).json({ message: "No books found for this author" });  // Handle no matches
    }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;  // Get the author from request parameters
    const bookKeys = Object.keys(books);  // Get all book keys
    
    const matchingBooks = bookKeys
        .map(key => books[key])  // Map keys to book objects
        .filter(book => book.title === title);  // Filter books by author

    if (matchingBooks.length > 0) {
        res.status(200).json(matchingBooks);  // Return matching books if found
    } else {
        res.status(404).json({ message: "No books found for this title" });  // Handle no matches
    }
});


//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
