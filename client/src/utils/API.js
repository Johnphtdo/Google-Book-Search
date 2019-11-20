import axios from "axios";

export default {
    
    // Gets all books
    getBooks: function() {
      return axios.get("/api/books/");
    },
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };