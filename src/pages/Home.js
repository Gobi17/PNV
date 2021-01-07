import { Button, Spinner} from 'react-bootstrap';
import React, { Component } from 'react';
import Step1 from '../Components/Step1';
import Step2 from '../Components/Step2';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import graph from 'ngraph.graph';
import pagerank from 'ngraph.pagerank';

export default class Home extends Component {
    state = {
        stepCount : 1,
        pdbfile:undefined,
        pdbid:'',
        cutoff:undefined,
        parameter:'Hydrophobicity',
        network:{
            nodes:[],
            edges:[]
        },
        pageRank:0,
        redirectToResult: false,
        submitButtonClicked:false
    }

    hydro = {
        "ALA":0.616,
       "PHE":1.000,
       "LEU":0.943,
       "ILE":0.943,
       "TYR":0.880,
       "TRP":0.878,
       "VAL":0.825,
       "MET":0.738,
       "PRO":0.711,
       "CYS":0.680,
       "GLY":0.501,
       "THR":0.450,
       "SER":0.359,
       "LYS":0.283,
       "GLN":0.251,
       "ASN":0.236,
       "HIS":0.165,
       "GLU":0.043,
       "ASP":0.028,
       "ARG":0.000
    }

    nodes=[]


    onChange = (e) => {
        if(e.target.name==='pdbfile'){
            this.setState({[e.target.name]: e.target.files[0]})
        }else{
            this.setState({[e.target.name]: e.target.value})
        }
    }

    changeValues = (name)=>{
        if(name==="pdbfile"){
            this.setState({pdbfile:undefined})
        }else{
            this.setState({pdbid:''})
        }
    }

    computeGraphData = (data) => {
        let coordinates=[]
        let graphVar = new graph();
        let edges = []
        let node = []
        const result = data.split('\n').filter((str) => {
            return str.slice(0,4) === 'ATOM' && str.slice(12,16) === ' CA '
        })
        
        for (let i of result){
            let x = Number(i.slice(30,38))
            let y = Number(i.slice(38,46))
            let z = Number(i.slice(46,54))
            let rName = i.slice(17,20)
            coordinates = [...coordinates,[x,y,z,rName]]
        }

        for (let j=0; j<coordinates.length-1; j++){
            for (let k=j+1; k<coordinates.length; k++){
                if(coordinates[j][3] !== coordinates[k][3]){
                    let x = Math.pow(coordinates[j][0] - coordinates[k][0],2)
                    let y = Math.pow(coordinates[j][1] - coordinates[k][1],2)
                    let z = Math.pow(coordinates[j][2] - coordinates[k][2],2)
                    let dis = Number(Math.sqrt(x+y+z).toFixed(2))
                    if(this.state.cutoff && dis < this.state.cutoff && this.state.parameter === "Distance"){
                        edges.push({id:`e${j}`,source:coordinates[j][3],target:coordinates[k][3],value:String(dis)})
                        graphVar.addLink(coordinates[j][3],coordinates[k][3])
                        if(!node.find(data => data.label===coordinates[j][3])){
                            node.push({id:coordinates[j][3],label:coordinates[j][3]})
                        }
                        // finalResult.push([coordinates[j][3],coordinates[k][3],dis])
                    }else if(this.state.cutoff && dis < this.state.cutoff && this.state.parameter === "Hydrophobicity"){
                        const temp = Number((this.hydro[coordinates[j][3]] + this.hydro[coordinates[k][3]]).toFixed(3))
                        edges.push({id:`e${j}`,source:coordinates[j][3],target:coordinates[k][3],value:String(temp)})
                        graphVar.addLink(coordinates[j][3],coordinates[k][3])
                        if(!node.find(data => data.label===coordinates[j][3])){
                            node.push({id:coordinates[j][3],label:coordinates[j][3]})
                        }
                        // finalResult.push([coordinates[j][3],coordinates[k][3],temp])
                    }
                }
            }
        }
        let pageRank = pagerank(graphVar,0.90)
        this.setState({network:{nodes:node,links:edges}, pageRank, redirectToResult:true}
        )
    }

    onSubmit = ()=>{
        this.setState({submitButtonClicked:true})
        axios.get(`https://files.rcsb.org/download/${this.state.pdbid}.pdb`)
        .then((response)=>{
            if(response.data && response.status === 200){
                this.computeGraphData(response.data);
            }else{
                alert('Error in fetching Data')
            }
        })
        .catch(err=>{alert(err)
            this.setState({submitButtonClicked:false})
        })
    }

    render() {
        return (
            <div className='home'>
                <h2 style={{alignContent:'center', padding:'20px'}}>Protein Network Visualization</h2>
                <div className="steps-div">
                    {this.state.stepCount === 1 ? 
                        <Step1 onChange={this.onChange} pdbfile={this.state.pdbfile} pdbid={this.state.pdbid} changeValues={this.changeValues}/> : 
                        <Step2 onChange={this.onChange} cutoff={this.state.cutoff} parameter={this.state.parameter}/>}
                </div>
                <div className="form-footer">
                    {this.state.stepCount ===1 ?
                        <>
                            <Button variant="dark" disabled>Previous</Button>
                            <em>Step {this.state.stepCount} of 2</em>
                            <Button variant="dark" onClick={()=>this.setState({stepCount : this.state.stepCount+1})}>Next</Button>
                        </>
                    :<>
                        <Button variant="dark" onClick={()=>this.setState({stepCount : this.state.stepCount-1})}>Previous</Button>
                        <em>Step {this.state.stepCount} of 2</em>
                        {this.state.submitButtonClicked ? 
                            <Button variant="dark" disabled>
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                /> loading
                            </Button>:
                            <Button variant="dark" onClick={this.onSubmit}>Submit</Button>
                        }
                        
                    </>}
                    
                </div>
                {this.state.redirectToResult && <Redirect to={{pathname: '/result',state:{ network: this.state.network, pageRank: this.state.pageRank }}}/>}
            </div>
        )
    }
}
