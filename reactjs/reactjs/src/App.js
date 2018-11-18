import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  generate() {
    ReactDOM.render(<Table />, document.getElementById('table'));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.generate}>Generate</button>
        <div id="table">
        </div>
      </div>
    );
  }
}

class Table extends Component {
  
  render() {

    var rows = [];
    for(var i = 0; i < 1000; i++) {
      
      var random = Math.ceil(Math.random() * 100 + 1);
      var row = [];

      for(var j = 0; j < random; j++) {
        row.push(<td key={'inner' + j.toString()}>{j}</td>);
      }

      rows.push(<tr key={'outer'+i.toString()}>{row}</tr>);
    }

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default App;
