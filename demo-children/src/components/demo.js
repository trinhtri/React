import { Component } from "react";
import { Button } from 'reactstrap';

class Demo extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
        isStatus: true
    }
  }
  onClick(){
      this.setState({
        isStatus :  !this.state.isStatus
      })
  }
  componentWillMount() {
    console.log('Component WILL MOUNT!')
 }
 componentDidMount() {
    console.log('Component DID MOUNT!')
 }
 componentWillReceiveProps(newProps) {    
    console.log('Component WILL RECIEVE PROPS!')
 }
 shouldComponentUpdate(newProps, newState) {
    return true;
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }
 
  render() {
    const { header, children } = this.props;
    const { isStatus } = this.state;
    return (
      <div className="hello">
        <div>
      <Button outline color="primary">primary</Button>{' '}
      <Button outline color="secondary">secondary</Button>{' '}
      <Button outline color="success">success</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="warning">warning</Button>{' '}
      <Button outline color="danger">danger</Button>
    </div>
        <div className="header" onClick = {this.onClick.bind(this)}>{header}</div>
        {
            isStatus && <div>{children}</div>
        } 
      </div>
    );
  }
}
export default Demo;
