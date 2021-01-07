import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

export default class Step2 extends Component {
    state = {
        file:null,
        pdb:""
    }
   
    render() {
        return (
            <div className="form1-alignment">
                <div className="form1-content">
                    <Form.Group  controlId="validationFormik103">
                        <Form.Label>Parameter</Form.Label>
                        <Form.Control as="select" name="parameter" defaultValue={this.props.parameter} onChange={(e)=>{this.props.onChange(e)}}>
                        <option value="Hydrophobicity">Hydrophobicity</option>
                        <option value="Distance">Distance</option>   
                        </Form.Control>
                    </Form.Group>
                </div>
                <div className="form1-content">
                    <Form.Group >
                    </Form.Group >
                </div>
                <div className="form1-content">
                    <Form.Group >
                        <Form.Label>Cut off Value</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter the cut off value"
                            name="cutoff"
                            value={this.props.cutoff}
                            onChange={(e)=>this.props.onChange(e)}
                        />
                    </Form.Group>
                </div>
            </div>
        )
    }
}
