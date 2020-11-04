import './App.css';
import NumberProvider from './components/NumberProvider';
import NumberContext from './contexts/NumberContext';
import Counter from './components/Counter';
import Show from './components/Show'
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <NumberProvider>
      <div className="App">
        <NumberContext.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update Number</button>
            </div>
          )}
        </NumberContext.Consumer>
        <Show></Show>
        <Counter>{({ count }) => <h1>{count}</h1>}</Counter>
      </div>
    </NumberProvider>
      </header>
    </div>
  );
}

export default App;
