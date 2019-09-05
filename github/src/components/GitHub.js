import axios from "axios";
import React from "react";
import GitFollowers from "./GitFollowers";
import GitFollowing from "./GitFollowing";
import GitMe from "./GitMe";

class GitHub extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      following: [],
      me: {}
    };
  }

  componentDidMount() {
    this.fetchMyUser();
    this.fetchFollowers();
    this.fetchFollowing();
  }
  fetchMyUser = () => {
    axios
      .get(`https://api.github.com/users/doanmade`)
      .then(res => this.setState({ me: res.data }))
      .catch(err => {
        console.log(err);
      });
  };
  fetchFollowers = () => {
    axios
      .get(`https://api.github.com/users/doanmade/followers`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  fetchFollowing = () => {
    axios
      .get(`https://api.github.com/users/doanmade/following`)
      .then(res => this.setState({ following: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <h1>My Profile</h1>
          <GitMe user={this.state.me} />
        </div>
        <hr />
        <div className="people">
          <div>
            <h1>My Followers</h1>
            <GitFollowers user={this.state.user} />
          </div>
          <div>
            <h1>Whom I Follow</h1>
            <GitFollowing user={this.state.following} />
          </div>
        </div>
      </div>
    );
  }
}

export default GitHub;
