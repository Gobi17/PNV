import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


//icon imports
import num1 from '../utils/028-1.svg';
import num2 from '../utils/029-2.svg';
import num3 from '../utils/030-3.svg';
import num4 from '../utils/031-4.svg';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <Jumbotron style={{textAlign:'center'}}>
                    <h1>Protein Network Visualization</h1>
                    <p> 
                        created by mister RBD
                    </p>
                </Jumbotron>
                <div style={{padding:'25px'}}>
                    <h3>About this App</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio at sunt voluptatibus hic deleniti? Molestiae aliquid nam accusamus, enim saepe error ipsam nesciunt consectetur quis id odio cumque eaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quasi, repellat soluta molestias, perferendis quisquam voluptatibus vero tempore provident numquam sunt nulla nihil pariatur consequatur optio tenetur vel quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi illo assumenda perspiciatis maxime officiis a deleniti ad eius aliquid cupiditate, corporis, earum harum reiciendis labore error totam repellat consequuntur suscipit!
                    </p>
                </div>
                <div style={{padding:'25px'}}>
                    <h3>How It Works!</h3>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#E9ECEF', color: 'rgb(35, 39, 43)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #E9ECEF' }}
                            iconStyle={{ background: 'light-grey', color: '#fff' }}
                            icon={<img src={num1} alt="atom" className="icon"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Lorem, ipsum dolor sit amet  </h3>
                            <h4 className="vertical-timeline-element-subtitle"> Error facere, quas sapiente laboriosa</h4>
                            <p>
                            Cmollitia aut accusamus voluptate est consectetur quos aliquam. Quibusdam consectetur adipisicing elit.doloribus quia sunt ullamm inventore ut quis illo?g
                            </p>
                            <a href="# ">link</a>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#E9ECEF', color: 'rgb(35, 39, 43)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #E9ECEF' }}
                            iconStyle={{ background: 'rgb(35, 39, 43)', color: '#fff' }}
                            icon={<img src={num2} alt="atom" className="icon"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Processing</h3>
                            <p>
                                The data will be collected at the frontend repo
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#E9ECEF', color: 'rgb(35, 39, 43)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #E9ECEF' }}
                            iconStyle={{ background: 'rgb(35, 39, 43)', color: '#fff' }}
                            icon={<img src={num3} alt="atom" className="icon"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Lorem, ipsum dolor sit amet  </h3>
                            <h4 className="vertical-timeline-element-subtitle"> Error facere, quas sapiente laboriosa</h4>
                            <p>
                            Cmollitia aut accusamus voluptate est consectetur quos aliquam. Quibusdam consectetur adipisicing elit.doloribus quia sunt ullamm inventore ut quis illo?g
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#E9ECEF', color: 'rgb(35, 39, 43)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #E9ECEF' }}
                            iconStyle={{ background: 'rgb(35, 39, 43)', color: '#fff' }}
                            icon={<img src={num4} alt="atom" className="icon"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Lorem, ipsum dolor sit amet  </h3>
                            <h4 className="vertical-timeline-element-subtitle"> Error facere, quas sapiente laboriosa</h4>
                            <p>
                            Cmollitia aut accusamus voluptate est consectetur quos aliquam. Quibusdam consectetur adipisicing elit.doloribus quia sunt ullamm inventore ut quis illo?g
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        )
    }
}
