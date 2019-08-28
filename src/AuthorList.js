import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authors = this.props.authors;
    return (
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">
            {authors.map(author => (
              <AuthorCard
                author={author}
                key={`${author.first_name}${author.last_name}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default AuthorList;
