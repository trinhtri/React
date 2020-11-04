import React, {Component} from 'react';
import  './ToDoItem.css'
import check from '../shared/icons/check.svg';
import tick from '../shared/icons/tick.svg';
class ToDoItem extends Component {
    render() {
        const {item, onClick}  = this.props;
        let className = 'ToDoItem';
        let img = tick;
        if(item.isCompleted === true){
            className +=" ToDoITem_Compeleted";
            img = check;
        }
        return (
            <div className = {className}>
                <img src = {img} width = {30} height = {80} alt = "null" onClick = {onClick}></img>
                <p>{item.title}</p>
            </div>
        ) 
    }
}
export default ToDoItem;