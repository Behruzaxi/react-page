import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios'

export default function GetData() {

    const [user, setUser] = useState([])

    const getAllData = () => {
        axios.get("http://localhost:3000/data")
            .then((data) => {
                setUser(data.data)
            })
    }

    const delete_func = (id) => {
        axios.delete(`http://localhost:3000/data/${id}`)
    }



    useEffect(() => {
        getAllData()
    }, [])


    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={10} >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user?.map((data) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.age}</td>
                                                <button>edit</button>
                                                <button onClick={() => delete_func(data.id)}>delete</button>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>

                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
