import React, { Component }  from 'react'
import Button from 'react-bootstrap/Button';

export default class bar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Bind the increment method to this component's instance
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className='bg-dark p-4 text-light'>
        <h1>{this.state.count}</h1>
            <div className='d-flex align-items-center justify-content-center'>
              
                        <Button variant="outline-danger">-</Button>
                        <span className='p-3 m-3 fs-4 '>0</span>
                        <Button variant="outline-info" >+</Button>
                        
                        
            </div>
            <Button variant="outline-success" onClick={this.increment}>new</Button>



      </div>
    )
  }
}
