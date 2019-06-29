import React from "react";
import { connect } from "react-redux";
import { getData, addFriend } from "../actions";

class FriendsList extends React.Component {
  state = {
    friend: {
     name: '',
     age: '',
     email: ''
    }
  }
  
  componentDidMount() {
    this.props.getData();
  }
  
  handleChange = e => {
    this.setState({
      ...this.state.friend,
      friend: { ...this.state.friend, [e.target.name]: e.target.value }
    })
  }
  
  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    })
  }
  
  render() {
    console.log(this.props.friends);
    return (
      <div>
        <h1>Friends List</h1>
        <div>
          {this.props.friends.map(friend => {
            return (
              <div key={friend.name}>
                <h3>{friend.name}</h3>
              </div>
            );
          })}
        </div>
        <h2>Add a friend</h2>
        <form onSubmit={this.addFriend}>
          <input name='name' placeholder='name' value={this.state.friend.name} onChange={this.handleChange} />
          <input name='age' placeholder='age' value={this.state.friend.age} onChange={this.handleChange} />
          <input name='email' placeholder='email' value={this.state.friend.email} onChange={this.handleChange} />
          <button onClick={this.addFriend}>add friend</button>
        </form>
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
  { getData, addFriend }
)(FriendsList);
