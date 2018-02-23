import React, { Component } from "react";
import { Col, Row, Container } from "react-grid-system"
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <Container>
        
        <Row>
          <Col>
            <Card>
              <CardTitle title="Search Parameters" />
              <CardText>

                <TextField fullWidth={true}
                  hintText="Search Term:"
                /><br />
                <br />
                <SelectField
                  floatingLabelText="Frequency"
                  fullWidth={true}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="1" />
                  <MenuItem value={2} primaryText="5" />
                  <MenuItem value={3} primaryText="10" />
                </SelectField>
                <br />
                <br />
                <TextField fullWidth={true}
                  hintText="Start Year (Optional):"
                /><br />
                <br />
                <TextField fullWidth={true}
                  hintText="End Year (Optional):"
                /><br />

              </ CardText>
              <CardActions>
                <FlatButton label="Search" />
                <FlatButton label="Clear Results" />
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