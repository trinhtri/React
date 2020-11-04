// const { Component } = require("react");
import {Component} from 'react';
import './traffic-light.css';
import classNames from 'classnames'
import {Const_States} from './../states.js'
class TrafficLight extends Component{
   render() {
    const {currentColor} = this.props;
       return (
           <div className = "TrafficLight">
                <div className = {classNames('bulb','red', {actived : currentColor === Const_States.RED})}></div>
                <div className = {classNames('bulb','green', {actived : currentColor === Const_States.GREEN})}></div>
                <div className = {classNames('bulb','orange', {actived : currentColor === Const_States.ORANGE})}></div>
           </div>
       )
   }
}
export default TrafficLight;