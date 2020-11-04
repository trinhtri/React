import React,{ Component } from 'react';
import './App.css';
import Demo from './components/demo'
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.inputElement = React.createRef();
  }
  componentDidMount(){
    this.inputElement.current.focus();
  }
  render() {
    return (
      <div className="App">
        <input type = "text" ref = {this.inputElement}></input>
        <header className="App-header">
          <Demo header = "hello">
            hello tri
          </Demo>
        </header>
      </div>
    );
  }
 
}

export default App;
