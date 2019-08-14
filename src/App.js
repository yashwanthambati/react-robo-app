import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/cards/cardlist.js'
import {SearchBox} from './components/searchbox/searchbox'


class App extends Component{
  constructor(){
    super();
    this.state = {
     robots: [],
     searchField:""
    }
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }
  handleChange=(e)=>{
    this.setState({ searchField: e.target.value})
  }
  render(){
    const {robots,searchField } = this.state
    const filteredRobots = robots.filter(robot=>
      robot.name.toLowerCase().includes(searchField.toLowerCase()) )
    return (
    <div className="App">
      <h1>Basic React-App</h1>
          
          <SearchBox
           placeholder='search robots'
           handleChange={this.handleChange}
          />
         <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
