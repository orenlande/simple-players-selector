import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NumPicker from './components/NumPicker';
import NumAdder from './components/NumAdder';

import './components/NumPicker.css';

class App extends Component {
  state = {
    num: null,
    options: [4, 8, 16, 32, 64],
    addingNumber: false
  };
 
  onButtonClick = (value) =>{
    this.setState({
      num: value
    })
  }

  insertNewNumber = (number) =>{
    const options = this.state.options;
    options.push(parseInt(number));

    this.setState({
      options: options,
      num: parseInt(number)
    })

    //after insert finish by hiding the input interface
    this.triggerAdding();
  }

  triggerAdding = () => {
    const state = !this.state.addingNumber
    this.setState({
      addingNumber: state
    })
  }

  render() {
    const numPicker = <NumPicker
      onNumChange={(val) => this.onButtonClick(val)}
      revealAddNumber={() => this.triggerAdding()}
      value={this.state.num}
      options={this.state.options}
    />

    const numAdder = <NumAdder
      hideAddNumber={() => this.triggerAdding()}
      addNumber={(e) => this.insertNewNumber(e)}
    />;

    //check wheter component shoud be presented
    const componentToRender = this.state.addingNumber ? numAdder: numPicker;

    return (
      <div className="App">
        <div className="num-picker-holder">
          <div style={{textAlign:'left'}}>
            <span>How many players?</span>
            {componentToRender}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
