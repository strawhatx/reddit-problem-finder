import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import moment from "moment";

const Posts = ({ items }) => {
  const handleVoteColor = (total) => {
    let color = "";

    if (total < 0) color = "text-danger";
    else if (total > 0) color = "text-success";
    else color = "text-secondary";

    return color;
  };

  return (
    <>
      {items.map((item, index) => {
        const total = item.upvotes - item.downvotes;
        const color = handleVoteColor(total);
        const date = moment(new Date(item.date * 1000))
          .startOf("hour")
          .fromNow();

        return (
          <Card key={index} className="card-hover-shadow p-4 mb-3 rounded">
            <Card.Body className="p-1">
              <Card.Subtitle className="mb-4 fw-semibold fs-5">
                {item.title}
              </Card.Subtitle>
              <Card.Text className="mb-4 fw-normal">{item.text}</Card.Text>

              <div className="text-secondary fs-7">
                <span className="fst-italic me-3">
                  Posted by: <span className="fw-semibold">{item.author}</span>
                </span>

                <span className="fst-italic me-3">
                  Posted: <span className="fw-semibold">{date}</span>
                </span>

                <span className="fst-italic me-3">
                  {item.comments} Comments
                </span>

                <span className={`fst-italic fw-semibold ${color}`}>
                  {total > 0 && "+"}
                  {Math.abs(total)} Votes
                </span>
              </div>
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
