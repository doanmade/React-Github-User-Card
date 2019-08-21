import React from "react";
import GitMe from "./GitMe";

class GitHubMe extends React.Component {
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
    fetch(`https://api.github.com/users/doanmade`)
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
        <GitMe user={this.state.user} />
      </div>
    );
  }
}

export default GitHubMe;
