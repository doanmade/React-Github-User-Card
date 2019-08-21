import React from "react";
import GitHubMe from "./GitHubMe";
import GitHubUsers from "./GitHubUsers";

class GitHub extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    // this.fetchMyUser();
    this.fetchUser();
  }

  // fetchMyUser = () => {
  //   fetch(`https://api.github.com/users/doanmade`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(userme => this.setState({ me: userme }))
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
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
        <div>
          <h1>My Profile</h1>
          <GitHubMe />
        </div>
        <hr />
        <h1>My Followers</h1>
        <GitHubUsers user={this.state.user} />
      </div>
    );
  }
}

export default GitHub;
