import React from 'react'
import mypic from '../assert/mypic.jpg';
import {Row, Col, Card} from 'antd'
import { FaMailBulk, FaLinkedin, FaGithub , FaTwitterSquare, FaKaggle} from "react-icons//fa";

export default function HomePage() {
    const gridStyle = {
        width: '100%',
        textAlign: 'center',
      };
    return (
        <div>
            <Row gutter={[32, 32]}>
                <Col span={8}>
                    <img src={mypic} width="300" height="300" />
                </Col>
                <Col span={8}>
                    <Card>
                        <Card.Grid style={gridStyle}> Md. Masud Rana</Card.Grid>
                        <Card.Grid style={gridStyle}> <FaMailBulk color="##581845" size="5%"/>
                            <span style={{ marginLeft: '1rem' }} > <a target="_blank" href="mailto:masud.cseian@gmail.com">masud.cseian@gmail.com</a></span>
                        </Card.Grid>
                        <Card.Grid style={gridStyle}> <FaLinkedin color="blue" size="5%"/>
                            <span style={{ marginLeft: '1rem' }} > <a target="_blank" href="https://www.linkedin.com/in/masud-164/">masud-164</a></span>
                        </Card.Grid>

                        <Card.Grid style={gridStyle}> <FaGithub  size="5%"/>
                            <span style={{ marginLeft: '1rem' }} > <a target="_blank" href="https://github.com/durbin-164">durbin-164</a></span>
                        </Card.Grid>

                    </Card>
                    
                </Col>
                <Col span={8}>
                    <Card>
                        <Card.Grid style={gridStyle}> <FaTwitterSquare color="#3DA9BD" size="5%"/>
                            <span style={{ marginLeft: '1rem' }} > <a target="_blank" href="https://twitter.com/masud164">@masud164</a></span>
                        </Card.Grid>
                    </Card>

                    <Card>
                        <Card.Grid style={gridStyle}> <FaKaggle color="#4DBED0" size="5%"/>
                            <span style={{ marginLeft: '1rem' }} > <a target="_blank" href="https://www.kaggle.com/durbin164">durbin164</a></span>
                        </Card.Grid>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
