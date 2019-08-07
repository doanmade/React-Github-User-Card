import React from "react";
import GitHubUsers from "./GitHubUsers";

class GitHub extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    this.fetchUser();
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
    return (
      <div>
        <h1>users</h1>
        <GitHubUsers user={this.state.user} />
      </div>
    );
  }
}

export default GitHub;
