import React from "react";
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SearchForm = props =>

    <Card>
        <CardTitle title="Search Parameters" />
        <CardText>

            <TextField
                fullWidth={true}
                value={props.searchTerm}
                onChange={props.handleSearchTermChange}
                name="searchTerm"
                hintText="Search Term:"
            /><br />

            <br />
            <SelectField
                fullWidth={true}
                value={props.resultCountValue}
                onChange={props.handleResultCountChange}
                name="resultCount"
                floatingLabelText="Number of Results"
            >
                <MenuItem value={1} primaryText="1" />
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
            </SelectField>
            <br />

            <br />
            <TextField fullWidth={true}
                value={props.startYear}
                onChange={props.handleStartYearChange}
                name="startYear"
                hintText="Publication Start Year (Optional):"
            /><br />

            <br />
            <TextField fullWidth={true}
                value={props.endYear}
                onChange={props.handleEndYearChange}
                name="endYear"
                hintText="Publication End Year (Optional):"
            /><br />

        </ CardText>
        <CardActions>

            <FlatButton
                disabled={!props.searchTerm}
                onClick={props.handleFormSubmit}
                label="Search" />

            <FlatButton
                label="Clear Results" />

        </CardActions>
    </Card>;

export default SearchForm;

