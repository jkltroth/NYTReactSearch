import React from "react";
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


const SavedArticlesCard = props =>
    <Card>
        <CardTitle title="Saved Articles" />
        <CardText>

            {props.savedArticles.map(savedArticle =>

                <Card key={savedArticle._id}>

                    <CardTitle
                        title={savedArticle.title}
                        subtitle={'Published on ' + savedArticle.pub_date} />

                    <CardText>
                        {savedArticle.snippet}
                    </CardText>

                    <CardActions>

                        <RaisedButton
                            primary={true}
                            href={savedArticle.web_url}
                            target="_blank"
                            label="View Article" />

                        <RaisedButton
                            secondary={true}
                            onClick={() => props.handleArticleSave({
                                title: savedArticle.headline.main,
                                snippet: savedArticle.snippet,
                                date: savedArticle.pub_date,
                                url: savedArticle.web_url
                            })}
                            label="Save Article" />

                    </CardActions>
                </Card>
            )}
        </ CardText>

    </Card>;

export default SavedArticlesCard;

