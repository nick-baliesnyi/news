import React from "react";
import { Pagination, Row, Col } from "react-bootstrap";

const NavigationList = (props) => {
  return (
    <div className="mt-3">
      <Row>
        <Col xl lg md sm={{ offset: 5 }}>
          <Pagination>
            {props.pages.map((el) => (
              <Pagination.Item
                active={el === props.active}
                key={el}
                onClick={() => {
                  props.fetch(el);
                  props.activeButton(el);
                }}
              >
                {el}
              </Pagination.Item>
            ))}
          </Pagination>
        </Col>
      </Row>
    </div>
  );
};

export default NavigationList;
