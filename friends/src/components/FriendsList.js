import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    console.log(this.props.friends);
    return (
      <div>
        <h1>Friends List</h1>
        <div>
          {this.props.friends.map(friend => {
            return (
              <div>
                <h3>{friend.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    errorStatusCode: state.errorStatusCode
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(FriendsList);
