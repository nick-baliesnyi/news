import React from "react";
import { Card } from "react-bootstrap";

const NewsCounter = (props) => {
  return (
    <Card.Title className="text-center mb-4">
      This page has {props.negative}{" "}
      <span className="badge badge-danger">negative</span> news and{" "}
      {props.positive} <span className="badge badge-success">positive</span>{" "}
      news
    </Card.Title>
  );
};

export default NewsCounter;
