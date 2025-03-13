import React from 'react'
import { Col } from 'react-bootstrap'

const skillitem = ({children}:any) => {
    return (
        <Col className="proitem"  xs={4} md={4} xl={1} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        {children}
        </Col>
    )
}

export default skillitem
