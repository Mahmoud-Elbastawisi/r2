import React, { Component }  from 'react'
import Button from 'react-bootstrap/Button';

export default class bar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      t:"counter",
      count: 0,
    };
    // Bind the increment method to this component's instance
    this.increment = this.increment.bind(this);
    this.dec = this.dec.bind(this);
    this.ch = this.ch.bind(this);
  }

  increment() {
    
      this.setState((prevState) => ({
        count:prevState.count + 1,
        t:prevState.t="count"
        ,}));
    
  }

  ch() {
    
    this.setState((prevState) => ({
      count:prevState.count=0,
      t:prevState.t="new count"
      ,}));
  
}

  dec() {
    if (this.state.count>0) {
      this.setState((prevState) => ({
        count:prevState.count - 1,
        t:prevState.t="count"
        ,}));
    }
  }

  render() {
    return (
      <div className='bg-dark p-4 text-light'>
        <h1>{this.state.t}</h1>
            <div className='d-flex align-items-center justify-content-center'>
              
                        <Button variant="outline-danger" onClick={this.dec}>-</Button>
                        <span className='p-3 m-3 fs-4 ' >{this.state.count}</span>
                        <Button variant="outline-info" onClick={this.increment}>+</Button>
                        
                        
            </div>
            <Button variant="outline-success" onClick={this.ch}>new</Button>



      </div>
    )
  }
}
