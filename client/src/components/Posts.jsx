import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Posts = ({ items }) => {
  const handleVoteColor = (total) => {
    let color = "";

    if (total < 0) color = "text-success";
    else if (total > 0) color = "text-error";
    else color = "text-light";

    return color;
  };

  return (
    <>
      {items.map((item, index) => {
        const total = item.upvotes - item.downvotes;
        const color = handleVoteColor(total);

        return (
          <Card key={index} className="card-hover-shadow p-4 mb-3 border-0">
            <Card.Body className="p-4">
              <Card.Subtitle className="mb-4">{item.title}</Card.Subtitle>
              <Card.Text>{item.text}</Card.Text>

              <Card.Footer>
                <div>Posted by: {item.author}</div>{" "}
                <span className={color}>
                  {total > 0 && "+"} {Math.abs(total)}
                </span>
              </Card.Footer>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

Posts.propTypes = {
  items: PropTypes.array,
};

export default Posts;
