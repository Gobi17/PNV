import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//icon imports
import num1 from '../utils/028-1.svg';
import num2 from '../utils/029-2.svg';
import num3 from '../utils/030-3.svg';
import num4 from '../utils/031-4.svg';

export default class Reference extends Component {
    render() {
        return (
            <div className="reference">
                <h2>Reference Papers and Books</h2>
                <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#E9ECEF', color: 'rgb(35, 39, 43)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #E9ECEF' }}
                            iconStyle={{ background: 'light-grey', color: '#fff' }}
                            icon={<img src={num1} alt="atom" className="icon"/>}
                        >
                            <h3 className="vertical-timeline-element-title">NetworkX</h3>
                            <h4 className="vertical-timeline-element-subtitle"> Network Analysis with Python</h4>
                            <p>
                            “NetworkX is a python package for the creation, manipulation and study of the structure, dynamics and functions of complex networks.”
                            <a href="https://www.cl.cam.ac.uk/~cm542/teaching/2011/stna-pdfs/stna-lecture11.pdf" target="_blank"><p>click here</p></a>
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#E9ECEF', color: 'rgb(35, 39, 43)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #E9ECEF' }}
                            iconStyle={{ background: 'rgb(35, 39, 43)', color: '#fff' }}
                            icon={<img src={num2} alt="atom" className="icon"/>}
                        >
                            <h3 className="vertical-timeline-element-title">React.js Essentials</h3>
                            <p>
                            A fast-paced guide to designing and building scalable and maintainable web apps with React.js By Artemij Fedosejev
                            <a href="https://www.koncar-institut.hr/wp-content/uploads/2017/03/9781783551620-REACTJS_ESSENTIALS-3.pdf" target="_blank" > <p>click here</p></a>
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#E9ECEF', color: 'rgb(35, 39, 43)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #E9ECEF' }}
                            iconStyle={{ background: 'rgb(35, 39, 43)', color: '#fff' }}
                            icon={<img src={num3} alt="atom" className="icon"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Network Classification and Categorization Paper </h3>

                            <p>
                            Network science is a field which seeks to understand the world by representing interactions and relationships between objects as graphs. By organizing data into networks, we can better understand how objects of interest are connected.
                            <a href="https://www.valpo.edu/mathematics-statistics/files/2014/09/Schmitt2017.pdf" target="_blank"><p>click here</p></a>
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#E9ECEF', color: 'rgb(35, 39, 43)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #E9ECEF' }}
                            iconStyle={{ background: 'rgb(35, 39, 43)', color: '#fff' }}
                            icon={<img src={num4} alt="atom" className="icon"/>}
                        >
                            <h3 className="vertical-timeline-element-title">PageRank Algorithm </h3>
                            <p>Since the amount of websites is growing day by day, the web sites have to be ranked using certain algorithms. The specialty of Google’s page rank is that it does not allow spams, which are webpages that are coded in such a way to manipulate the ranking results and that go against the guidelines established by Google.
                            <a href="http://www.iosrjournals.org/iosr-jce/papers/Vol19-issue1/Version-3/A1901030107.pdf" target="_blank"><p>click here</p></a>
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
            </div>
        )
    }
}
