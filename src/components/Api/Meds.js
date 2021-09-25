import React, { useState} from 'react';
import {Table, Accordion, Button} from 'react-bootstrap';


const Meds = ({ medics = [] }) => {

    return (
        
        <div className="row">
            {medics.map ((item, index) => (
                    <div key= {index}className="col">
                            <Accordion defaultActiveKey="1"  variant="success" aria-expanded="false">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header ><h3>{item.name}</h3></Accordion.Header>
                                <Accordion.Body >
                                <Table striped bordered hover size="sm" variant="success">
                                <thead>
                                    <tr>
                                    <th>Especies</th>
                                    <th>Dosis</th>
                                    <th>Vía</th>
                                    <th>Frecuencia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{item.Especies}</td>
                                    <td>{item.Dosis}</td>
                                    <td>{item.Via}</td>
                                    <td>{item.Frecuencia}</td>
                                    </tr>
                                </tbody>
                                <br></br>
                                <thead>
                                    <tr>
                                    <th>Indicaciones</th>
                                    <th>Contraindicaciones</th>
                                    <th>Acción</th>
                                    <th>Nombres Comerciales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td>{item.indicaciones}</td>
                                <td>{item.Contraindicaciones}</td>
                                <td>{item.Accion}</td>
                                <td>{item.NombresComerciales}</td>
                                </tr>
                                </tbody>
                                </Table>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </div>
                ))
            }
        </div>
    )
}

export default Meds
