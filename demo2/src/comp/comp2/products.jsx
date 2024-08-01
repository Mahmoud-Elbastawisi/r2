import React, { Component } from 'react'
import Btn from '../button/btn'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class products extends Component {
  render() {
    console.log(this.props.id);
    return (

<div className='d-flex align-items-center justify-content-center'>
        <Container className='p-0  w-100'>
        <Row className='d-flex align-items-center justify-content-center gap-4 p-4'>
        {this.props.data.map((i,t)=>
            {
              
              return <Btn key={i.id} data={i}/>;
  
            })}
        </Row>
      </Container>
</div>
  );

  }
}
