import Counters from './components/counters'
import React, { Component } from 'react';
import NavBar from './components/navbar'
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props){
    super(props);
    console.log('App - Constructor', this.props)
  }

  componentDidMount(){
    console.log('app - mounted')
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters})
  }
  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter) 
    counters[index] = {...counter}
    counters[index].value--;
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() { 
    console.log('app - rendered')
    return ( 
      <React.Fragment>
        <NavBar/>
        <Counters
        onIncrement = {this.handleIncrement}
        onDecrement = {this.handleDecrement}
        onDelete = {this.handleDelete}
        onReset = {this.handleReset}
        counters = {this.state.counters}
        ></Counters>
      </React.Fragment>
     );
  }
}
 
export default App;