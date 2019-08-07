import React from "react";

function GitHubUsers(props) {
  console.log(props);
  return (
    <>
      {this.state.props.map(user => {
        return (
          <div>
            <img
              width="200"
              key={user.id}
              src={user.avatar_url}
              alt={user.login}
            />

            <a href={user.html_url}>
              <h3>{user.login}</h3>
            </a>
          </div>
        );
      })}
      {/* {props.user.map(user => (
        <div key={user.id} className="user">
          <img src={props.img} alt={user.name} />
          <div>
            <h3>{props.name}</h3>
            <Link to={props.link} />
          </div>
        </div>
      ))} */}
    </>
  );
}

export default GitHubUsers;
