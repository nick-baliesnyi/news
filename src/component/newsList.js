import React, { Fragment } from "react";
import styles from "../animation/animations";
import { Button, Card } from "react-bootstrap";
import { StyleRoot } from "radium";
import MoodNews from "./moodNews";

const NewsList = (props) => {
  return (
    <Fragment>
      {props.newsList.map((el) => (
        <StyleRoot key={el.description}>
          <div style={styles.fadeIn}>
            <Card style={{ width: "100%" }} className="mt-2">
              <Card.Img variant="top" src={el.urlToImage} />
              <Card.Body>
                <Card.Title>{el.description}</Card.Title>
                <Card.Text>
                  {el.author ? `Author: ${el.author}` : "Author: unknown"}
                  <br />
                  <MoodNews/>
                </Card.Text>
                <Card.Text>
                  Publication date: {el.publishedAt.replace(/[a-zA-Z]/g, " ")}
                </Card.Text>
                <Button variant="light" href={el.url} className="shadow-sm">
                  More details
                </Button>
              </Card.Body>
            </Card>
          </div>
        </StyleRoot>
      ))}
    </Fragment>
  );
};

export default NewsList;
