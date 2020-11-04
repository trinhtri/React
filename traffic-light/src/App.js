import './App.css';
import TrafficLight from './components/traffic-light';
import {Component} from 'react';
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  constructor(){
    super();
    this.state = {
        currentColor : RED   
    }
    setInterval(() => {
        this.setState({
            currentColor :  this.getNextColor(this.state.currentColor)
        })
    }, 1000);

}
getNextColor(color){
  switch(color){
      case RED:
          return ORANGE;
      case ORANGE:
          return GREEN;
      case GREEN:
          return RED;
      default:
          return RED;
  }
}

render(){
  const currentColor = this.state.currentColor;
  return (
    <div className="App">
      <header className="App-header">
        <TrafficLight currentColor = {currentColor}></TrafficLight>
      </header>
    </div>
  );
}
}

export default App;
