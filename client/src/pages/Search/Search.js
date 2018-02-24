import React, { Component } from "react";
import { Col, Row, Container } from "react-grid-system"
import API from "../../utils/API";
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {

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
          console.log(res.data.response.docs)})
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
            <Card>
              <CardTitle title="Search Parameters" />
              <CardText>

                <TextField
                  fullWidth={true}
                  value={this.state.searchTerm}
                  onChange={this.handleSearchTermChange}
                  name="searchTerm"
                  hintText="Search Term:"
                /><br />

                <br />
                <SelectField
                  fullWidth={true}
                  value={this.state.frequencyValue}
                  onChange={this.handleFrequencyChange}
                  name="frequency"
                  floatingLabelText="Frequency"
                >
                  <MenuItem value={1} primaryText="1" />
                  <MenuItem value={2} primaryText="5" />
                  <MenuItem value={3} primaryText="10" />
                </SelectField>
                <br />

                <br />
                <TextField fullWidth={true}
                  value={this.state.startYear}
                  onChange={this.handleStartYearChange}
                  name="startYear"
                  hintText="Start Year (Optional):"
                /><br />

                <br />
                <TextField fullWidth={true}
                  value={this.state.endYear}
                  onChange={this.handleEndYearChange}
                  name="endYear"
                  hintText="End Year (Optional):"
                /><br />

              </ CardText>
              <CardActions>

                <FlatButton
                  onClick={this.handleFormSubmit}
                  label="Search" />

                <FlatButton
                  label="Clear Results" />

              </CardActions>
            </Card>
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
export default Search;