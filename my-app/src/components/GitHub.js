import React from "react";
import { Link } from "react-router-dom";

class GitHub extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/doanmade/followers`)
      .then(response => {
        return response.json();
      })
      .then(users => this.setState({ user: users }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    this.fetchUser();
    return (
      <div>
        <h1>users</h1>

        {this.state.user.map(user => {
          return (
            <div>
              <img
                width="200"
                key={user}
                src={user.avatar_url}
                alt="Doggo img"
              />

              <Link to={user.html_url}>
                <h3>{user.login}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GitHub;
