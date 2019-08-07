import React, { Link } from "react";

function GitHubUsers(props) {
  console.log(props);
  return (
    <>
      {props.user.map(user => (
        <div key={user.id} className="user">
          <img src={props.img} alt={user.name} />
          <div>
            <h3>{props.name}</h3>
            <Link to={props.link} />
          </div>
        </div>
      ))}
    </>
  );
}

export default GitHubUsers;
