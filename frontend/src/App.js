import React, {Component} from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "nil",
            testInsertData: "nil",
            testDeleteData: "nil",
            testUpdateData: "nil",

        };
    }

    getData() {
        return fetch("http://localhost:5000/rider/getData")
            .then(res => res.text())
            .then(res => this.setState({data: res}))
            .catch(err => err);
    }

    testInsertData(pizza) {
        return fetch("http://localhost:5000/rider/insertData", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pname: pizza,
            })
        })
            .then(res => res.text())
            .then(res => this.setState({testInsertData: res}))
            .catch(err => err);
    }

    testDeleteData(pizza) {
        return fetch("http://localhost:5000/rider/deleteData", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pname: pizza,
            })
        })
            .then(res => res.text())
            .then(res => this.setState({testDeleteData: res}))
            .catch(err => err);
    }

    testUpdateData(oldPizza, newPizza) {
        return fetch("http://localhost:5000/rider/updateData", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                oldPname: oldPizza,
                newPname: newPizza,
            })
        })
            .then(res => res.text())
            .then(res => this.setState({testUpdateData: res}))
            .catch(err => err);
    }

    componentDidMount() {
      /* does not happen in order, can test one by one*/
      /* if insert dup keys into table, backend will return error and stop running*/

        // this.testInsertData("pizza2")
        // this.testUpdateData("pizza1","pizza2")
        // this.testDeleteData("pizza2")
        this.getData();
    }

    render() {
        return (
            <div>
                <p>Test Insert data:{this.state.testInsertData}</p>
                <br/>
                <p>Test Update data:{this.state.testUpdateData}</p>
                <br/>
                <p>Test Delete data:{this.state.testDeleteData}</p>
                <br/>
                <p>Data: {this.state.data} </p>
                <br/>
            </div>
        );
    }
}


/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const apiResponse
  function getRespose() {
    fetch("https://localhost:9000/testAPI")
    .then(response=>return response)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/