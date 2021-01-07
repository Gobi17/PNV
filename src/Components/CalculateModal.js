import { Modal, Button } from 'react-bootstrap';
import React, { Component } from 'react'

export default class CalculateModal extends Component {
    
    render() {
        return (
            <div>
                <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                show={this.props.show}
                onHide = {this.props.onHide}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            PageRank Values
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>            
                        <ul>
                            {this.props.pageRank.map((data)=>{
                                return(<li><b>{data[0]}</b> : {data[1]}</li>)
                            })
                            }
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
