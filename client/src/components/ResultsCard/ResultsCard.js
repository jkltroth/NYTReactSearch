import React from "react";
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const ResultsCard = props =>
    <Card>
        <CardTitle title="Results" />
        <CardText>

            {props.results.map(result =>

                <Card key={result._id}>

                    <CardTitle
                        title={result.headline.main}
                        subtitle={'Published on ' + result.pub_date} />

                    <CardText>
                        {result.snippet}
                    </CardText>

                    <CardActions>

                        <RaisedButton
                            primary={true}
                            href={result.web_url}
                            target="_blank"
                            label="View Article" />

                        <RaisedButton
                            secondary={true}
                            onClick={() => props.handleArticleSave({
                                title: result.headline.main,
                                snippet: result.snippet,
                                date: result.pub_date,
                                url: result.web_url
                            })}
                            label="Save Article" />

                    </CardActions>
                </Card>
            )}
        </ CardText>

    </Card>;

export default ResultsCard;

