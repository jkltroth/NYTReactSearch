import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  getArticles: function(searchCriteria) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + searchCriteria);
  },
  saveArticle: function(articleData) {
    console.log("Made it to API")
    return axios.post("/api/articles", articleData);
  }
};
 