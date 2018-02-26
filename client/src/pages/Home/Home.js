import React, { Component } from "react";
import { Col, Row, Container } from "react-grid-system"
import API from "../../utils/API";
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import SearchForm from "../../components/SearchForm";

class Home extends Component {

    state = {
        searchTerm: "",
        frequencyValue: 1,
        startYear: "",
        endYear: "",
        results: []
    };

    handleSearchTermChange = event => {
        this.setState({ searchTerm: event.target.value });
    };

    handleFrequencyChange = (event, index, frequencyValue) => this.setState({ frequencyValue });

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
                })
                .catch(err => console.log(err));

            // console.log(searchCriteria);
        };

        // if (this.state.title && this.state.author) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        // }
    };

  render() {
    return (
      <Container>

        <Row>
          <Col>
            <SearchForm 
            handleSearchTermChange= {this.handleSearchTermChange}
            handleFrequencyChange={this.handleFrequencyChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            searchTerm={this.state.searchTerm}
            frequencyValue={this.state.frequencyValue}
            startYear={this.state.startYear}
            endYear={this.state.endYear}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardTitle title="Results" />
              <CardText>

              </ CardText>

            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardTitle title="Saved Articles" />
              <CardText>

              </ CardText>

            </Card>
          </Col>
        </Row>

      </Container>
    );

  }
}
export default Home;