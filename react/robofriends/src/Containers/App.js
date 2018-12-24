import React, {Component} from 'react';
import CardList from '../Components/cardList';
import SearchBox from '../Components/searchbox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import '../CSS/App.css';
import 'tachyons';

class App extends Component{
    constructor(props){
        super(props);

        this.state ={

            robots: [],
            searchfield:''

        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

    onsearchchange = (event) => {

        this.setState({searchfield: event.target.value });
    }

    render(){

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
        <div className="tc">
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onsearchchange} />
        <Scroll>
            <ErrorBoundry>
                <CardList robots={filteredRobots} />
            </ErrorBoundry>
        </Scroll>
        <div>
            <h3 className='tc'>Built with React.js</h3>
        </div>
       </div>

       );
    }
} 

export default App;