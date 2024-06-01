import React from "react";
import PropTypes from "prop-types";
import image from "../assets/img.png";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px", maxHeight: "500px", overflow: "hidden" }}
    >
      <img
        src={src || image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt={title}
      />
      <div
        className="card-body"
        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
      >
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No Title Available"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News incident. It is information about something that has just happened."}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default NewsItem;
