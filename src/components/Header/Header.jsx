 import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
 
 export default function Header() {

const [name, setName] = useState("")
const [age, setAge] = useState("")

let obj = {
    name: name,
    age: age
}

const postdata = (e) => {
e.preventDefault()
axios.post("http://localhost:3000/data", obj).then(res => {
    if(res.status === 201){
        alert(res.statusText);
        setAge("")
        setName("")
    }
})

}


   return (
     <div>
  <Container fluid="md">
      <Row className='justify-content-center mt-5'>  
        <Col  xs={6}>
         <Form onSubmit={postdata}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age} />
      </Form.Group>
      <Button variant="primary" style={{width: "100"}} type="submit">
        Submit
      </Button>
         </Form>
        </Col>
      </Row>
    </Container>

     </div>
   )
 }
 