import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    onSeacrhChange = (event) => {
        this.setState({ searchField: event.target.value });
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if (this.state.robots.lenght === 0) {
            return <h1>Laoding</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSeacrhChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            )
        }
    }
}

export default App;