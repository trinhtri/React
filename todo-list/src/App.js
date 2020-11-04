import React, { Component } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import checked from "./shared/icons/checked.svg";
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  listItems = [];
  constructor() {
    super();
    this.state = {
      input: "",
      listItems: [
        { title: "da bong", isCompleted: true },
        { title: "choi pes", isCompleted: false },
        { title: "Ghost", isCompleted: false },
      ],
    };
  }
  onItemClicked(item) {
    return () => {
      const isCompleted = item.isCompleted;
      const { listItems } = this.state;
      let index = this.state.listItems.indexOf(item);
      this.setState({
        listItems: [
          ...listItems.slice(0, index),
          {
            ...item,
            isCompleted: !isCompleted,
          },
          ...listItems.slice(index + 1),
        ],
      });
    };
  }
  onKeyUpValue(event) {
    let text = event.target.value;
    if (event.code === "Enter") {
      this.setState({
        input: "",
        listItems: [
          ...this.state.listItems,
          {
            title: text,
            isCompleted: false,
          },
        ],
      });
    }
  }
  onChangeValue(event) {
    let text = event.target.value;
    this.setState({
      input: text,
    });
  }
  onclickAll() {
    let newList = [...this.state.listItems];
    let statusFist = newList[0].isCompleted;
    newList.map((x) => {
      x.isCompleted = !statusFist ;
      return x;
    });
    this.setState({
      input: "",
      listItems: [...newList],
    });
  }
  render() {
    const img = checked;
    return (
      <div className="App">
        <div className="header">
          <img
            src={img}
            alt="null"
            width={30}
            height={30}
            onClick={this.onclickAll.bind(this)}
          ></img>
          <input
            className="form-control"
            value={this.state.input}
            onChange={this.onChangeValue.bind(this)}
            onKeyUp={this.onKeyUpValue.bind(this)}
          ></input>
        </div>
        {this.state.listItems.length > 0 &&
          this.state.listItems.map((item, index) => (
            <ToDoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}
        {this.state.listItems.length === 0 && "Nothing here."}
      </div>
    );
  }
}
export default App;
