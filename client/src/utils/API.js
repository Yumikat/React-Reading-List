import axios from "axios";

export default {
  // Gets all books
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the book with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  getCategory: function(category) {
    return axios.get("/api/posts/" + category);
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a book to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  },

  editPost: function(id, postData) {
    return axios.put("/api/posts/" + id, postData);
  }
};
