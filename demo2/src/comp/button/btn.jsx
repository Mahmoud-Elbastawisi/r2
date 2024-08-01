import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react'

export default class btn extends Component {

  obj=this.props.data

  

  render() {

  




    return (
<>

        <Card className='p-0' style={{ width: '20rem' }}>
        <Card.Img
         variant="top"
         src="https://images.pexels.com/photos/776657/pexels-photo-776657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         className='h-auto' />
        <Card.Body>
          <Card.Title>Card Title {this.obj.id}</Card.Title>
          <Card.Text>
            {this.obj.title}
          </Card.Text>
          <Button variant="primary">Go somewhere {this.obj.id} </Button>
        </Card.Body>
      </Card>

      
</>
    )
  }
}
