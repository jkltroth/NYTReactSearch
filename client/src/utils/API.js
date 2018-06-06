import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  getArticles: function(searchCriteria) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + searchCriteria);
  },
  getSavedArticles: function() {
    console.log("Loading articles...")
    return axios.get("/api/savedarticles");
  },
  saveArticle: function(articleData) {
    console.log("Saving article...")
    return axios.post("/api/savedarticles", articleData);
  }
};
 