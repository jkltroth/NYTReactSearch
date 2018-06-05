import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import ResultsCard from "../../components/ResultsCard";
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';

class Home extends Component {

  state = {
    searchTerm: "",
    resultCountValue: 1,
    startYear: "",
    endYear: "",
    results: []
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleResultCountChange = (event, index, resultCountValue) => this.setState({ resultCountValue });

  handleStartYearChange = event => {
    this.setState({ startYear: event.target.value });
  };

  handleEndYearChange = event => {
    this.setState({ endYear: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.searchTerm) {

      let searchCriteria = this.state.searchTerm;

      if (this.state.startYear) {
        searchCriteria += "&begin_date=" + this.state.startYear + "0101";
      }
      if (this.state.endYear) {
        searchCriteria += "&end_date=" + this.state.endYear + "0101";
      }

      API.getArticles(searchCriteria)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }

          console.log(res.data.response.docs)
          let searchResults = res.data.response.docs.slice(0,this.state.resultCountValue)
          this.setState({ results: searchResults });
        })
        .catch(err => console.log(err));
    };
  };

  handleArticleSave = articleData => {

    console.log(articleData);
    // // event.preventDefault();
    API.saveArticle({
      title: articleData.title,
      snippet: articleData.snippet,
      date: articleData.date,
      url: articleData.url
    })
      .then(res => {
        console.log(res)
        console.log("Article Saved")
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Grid
        container
        spacing={24}
        justify='center'>

        <Grid item xs={10} md={8}>
          <SearchForm
            handleSearchTermChange={this.handleSearchTermChange}
            handleResultCountChange={this.handleResultCountChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            searchTerm={this.state.searchTerm}
            resultCountValue={this.state.resultCountValue}
            startYear={this.state.startYear}
            endYear={this.state.endYear}
          />

        </Grid>
        <Grid item xs={10} md={8}>
          <ResultsCard
            handleArticleSave={this.handleArticleSave}
            results={this.state.results}
          />

        </Grid>
        <Grid item xs={10} md={8}>
          <Card>
            <CardTitle title="Saved Articles" />
            <CardText>

            </ CardText>

          </Card>
        </Grid>
      </Grid>
    );

  }
}
export default Home;