import React, { Component } from 'react'
import { Form, FormCheck } from 'react-bootstrap'
export default class Step1 extends Component {
    state = {
        isToggleOn : false,
    }

    changeToggle = ()=>{
        this.setState({isToggleOn:!this.state.isToggleOn},
        ()=>{
            if(this.state.isToggleOn){
                this.props.changeValues("pdbid")
            }else{
                this.props.changeValues("pdbfile")
            }
        }    
        )
        
    }

    render() {
        return (
            <div className="form1-alignment">
                <div className="form1-content">
                {this.state.isToggleOn===false ?

                        <Form.Group  controlId="validationFormik103">
                        <Form.Label><b>PDB ID</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the PDB ID"
                            name="pdbid"
                            value={this.props.pdbid}
                            onChange={(e)=>this.props.onChange(e)}
                        />
                        </Form.Group>
                    :
                        <Form.Group controlId="validationFormik103">
                        <Form.Label><b>PDB ID</b></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter the PDB ID"
                            name="pdbid"
                            disabled
                            value=""
                            onChange={(e)=>this.props.onChange(e)}
                        />
                        </Form.Group>
                    }

                </div>
                <div className="form1-content">

                    <Form.Group>
                        <FormCheck custom type="switch">
                            <FormCheck.Input isInvalid checked={this.state.isToggleOn} onChange={()=>{}}/>
                            <FormCheck.Label onClick={() => this.changeToggle()}>
                            {this.state.isToggleOn===false ? `PDB ID field is active `: `Upload PDB file is active`}
                            </FormCheck.Label>
                        </FormCheck>
                    </Form.Group >
                </div>

                <div className="form1-content">
                    {this.state.isToggleOn===false?
                        <Form.Group >
                            <Form.Label><b>PDB FILE</b></Form.Label>
                            <Form.Label htmlFor='file-upload' className='custom-file-upload-diabled'>
                            <Form.Control name='pdbfile' id='file-upload' type='file' disabled/>
                                Upload a file
                            </Form.Label>
                        </Form.Group>
                        :
                        <Form.Group >
                            <Form.Label><b>PDB FILE</b></Form.Label>
                            <Form.Label htmlFor='file-upload' className={this.props.pdbfile ? 'custom-file-upload-after' : 'custom-file-upload'}>
                            <Form.Control name='pdbfile' id='file-upload' type='file' onChange={(e)=>this.props.onChange(e)}/>
                                {this.props.pdbfile ? this.props.pdbfile.name : 'Upload a file'}
                            </Form.Label>
                        </Form.Group>
                    }
                </div>
            </div>
        )
    }
}
