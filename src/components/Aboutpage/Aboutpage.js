import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>
                            I'm a self-taught Full stack developer. 
                            I build websites with a focus on providing the experience for everyone using them and responsiveness. 
                            Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. 
                            A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3 style={{textAlign:'center'}}>Skills</h3>
                                <Col md={'auto'}>
                                    <h4>Front End</h4>
                                    <li>HTML</li>
                                    <li>CSS/Tailwind</li>
                                    <li>JavaScript</li>
                                    <li>React/Redus js</li>
                                    <li>Bootsrap</li>
                                    <li>TypeScript</li>
                                    <li>jQuery</li>
                                </Col>
                                <Col md={'auto'}>
                                    <h4>Back End</h4>
                                    <li>Python</li>
                                    <li>PHP</li>
                                    <li>Node js</li>
                                    <li>Django-React</li>
                                    <li>Ruby</li>
                                    <li>java</li>
                                    <li>Golang</li>
                                </Col>
                                <Col md={'auto'}>
                                    <h4>Others</h4>
                                    <li>Docker</li>
                                    <li>Git/Github</li>
                                    <li>Xcode</li>
                                    <li>Andriod Studio</li>
                                    <li>Computer Engineer</li>
                                    <li>CMS</li>
                                    <li>Devops Engineer</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage