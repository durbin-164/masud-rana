import React from 'react'
import {Row, Col, Card} from 'antd'
import resturant_management from '../assert/project/restaurant.png'
import bachelor_home_management from '../assert/project/bachelorHomeManagement.png'

function Project() {
    const gridStyle1 = {
        width: '40%',
        textAlign: 'center',
      };
      const gridStyle2 = {
        width: '60%',
        textAlign: 'center',
      };
    return (
        <div >
            <Card title="Project">
                <Card.Grid style={gridStyle1}><a href={'https://github.com/durbin-164/Restaurant-Management-System'}>Restaurant Management System</a></Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle2}><img src={resturant_management} width="600" height="300" /></Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle2}><img src={bachelor_home_management} width="600" height="300" /></Card.Grid>
                <Card.Grid style={gridStyle1}> <a href={'https://github.com/durbin-164/Bachelor-House-Management-Using-Android'}>Bachelor House Management Using Android</a></Card.Grid>
                
                
                    {/* <Row gutter={[16, 16]}>
                        <Col span={6}>
                            <a href={'https://github.com/durbin-164/Restaurant-Management-System'}>Restaurant Management System</a>
                        </Col>
                        <Col span={4}>
                            
                        </Col>
                        <Col span={14}>
                            <img src={resturant_management} width="600" height="300" />
                        </Col>

                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={6}>
                                <a href={'https://github.com/durbin-164/Bachelor-House-Management-Using-Android'}>Bachelor House Management Using Android</a>
                            </Col>
                            <Col span={4}>
                                
                            </Col>
                            <Col span={14}>
                                <img src={bachelor_home_management} width="600" height="300" />
                            </Col>
                    </Row> */}

                
            
            </Card>
        </div>
    )
}

export default Project
