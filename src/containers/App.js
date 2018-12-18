import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

// import React from 'react';
// class App extends React.Component {
class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    };
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users: users }));
    console.log('didMount');
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchField: event.target.value });
    // console.log(this.state.searchField);
  }

  render() {
    const { searchField, users } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log('render');

    return (!users.length) ? <h1>Loading ...</h1> : (
      <div className="App tc">
        <h1 className='f1'>Users List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList users={filteredUsers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
