import React, { Fragment } from "react";
import styles from "./animations";
import { Card, Button } from "react-bootstrap";
import { StyleRoot } from "radium";

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
                {el.author ? (
                  <Card.Text>Author: {el.author}</Card.Text>
                ) : undefined}
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
