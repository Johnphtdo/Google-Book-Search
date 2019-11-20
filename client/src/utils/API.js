import axios from "axios";

export default {
    
    // Gets all books
    getSavedBooks: function() {
      return axios.get("/api/books/");
    },

    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };