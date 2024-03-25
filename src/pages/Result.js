import React, { Component } from 'react';
import {ForceGraph3D} from 'react-force-graph';
import { Button } from 'react-bootstrap';
import CalculateModal from '../Components/CalculateModal';
import SpriteText from 'three-spritetext';


export default class Result extends Component {
    state={
        isCalculateModalOpen : false,
        result:[]
    }

    handleIsCalculateModalOpen = ()=>{
        let data = this.props.location.state.pageRank
        var sortable = []
        for (var protein in data) {
            sortable.push([protein, data[protein]]);
        }
        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });
        this.setState({isCalculateModalOpen:!this.state.isCalculateModalOpen, result:sortable})
    }


    render() {
        return (
            <>
                <div style={{position:'absolute',right:0,margin:'30px',zIndex:2}}>
                    <Button variant='dark' onClick={this.handleIsCalculateModalOpen}>Calculate PageRank</Button>
                </div>
                <ForceGraph3D
                    graphData={this.props.location.state.network}
                    nodeLabel="id"
                    nodeAutoColorBy="id"
                    nodeThreeObject={node => {
                        const sprite = new SpriteText(node.id);
                        sprite.color = node.color;
                        sprite.textHeight = 5;
                        return sprite
                    }}
                    linkThreeObjectExtend={true}
                    linkThreeObject={link => {
                      // extend link with text sprite
                      const sprite = new SpriteText(`${link.value}`);
                      sprite.color = 'lightgrey';
                      sprite.textHeight = 1.5;
                      return sprite;
                    }}
                    linkPositionUpdate={(sprite, { start, end }) => {
                      const middlePos = Object.assign(...['x', 'y', 'z'].map(c => ({
                        [c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
                      })));
          
                      // Position sprite
                      Object.assign(sprite.position, middlePos);
                    }}
                />
                <CalculateModal show={this.state.isCalculateModalOpen} onHide={this.handleIsCalculateModalOpen} pageRank={this.state.result}/>
            </>
        )
    }
}
