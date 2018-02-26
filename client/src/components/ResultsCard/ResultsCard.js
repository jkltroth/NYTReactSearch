import React from "react";
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const ResultsCard = props =>
    <Card>
        <CardTitle title="Results" />
        <CardText>

            {props.results.map(result =>

                <Card key={result.web_url}>

                    <CardTitle
                        title={result.headline.main}
                        subtitle={'Published on ' + result.pub_date} />

                    <CardText>
                        {result.snippet}
                    </CardText>

                    <CardActions>

                        <RaisedButton
                            // onClick={props.handleFormSubmit}
                            primary={true}
                            href={result.web_url}
                            target="_blank"
                            label="Link to Article" />

                        <RaisedButton
                            // onClick={props.handleFormSubmit}
                            secondary={true}
                            label="Save Article" />

                    </CardActions>
                </Card>
            )}
        </ CardText>

    </Card>;

export default ResultsCard;

