import React from "react";
import { Card } from "react-bootstrap";
import CommentTreeNode from "./TreeNode";
import PropTypes from "prop-types";

const CommentTree = ({ children }) => {
  return (
    <div className="p-4 mb-3">
      {children
        ?.map((i) => i.data)
        ?.map((node) => (
          <CommentTreeNode node={node} key={node.id} />
        ))}
    </div>
  );
};

CommentTree.propTypes = {
  children: PropTypes.array,
};

export default CommentTree;
