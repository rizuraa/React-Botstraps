import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from "../Assets/img1.jpeg"

function Home() {
  return (
    <Container>
        <br/>
        <h2>About Me</h2> 
        <br/><br/>
        <Row>            
            <Col sm={12}>
                Hello, i'm Muhammad Fariz Maulana a software engineering student at Technologi Institute of Telkom Purwokerto. I'm still on my way to graduate from my college. 
                <br/><br/>
                This project is a final task of Frontend Programming. heres my project using ReactJS and Bootstrap for frontend stack.
                <br/><br/>
                Also i attached this project on my Github. <a href='https://github.com/rizuuu/React-Botstraps'>Here</a>
                <br/><br/>                
                <h5>
                  Tech-Stack
                </h5>                
                <ul>
                  <li> React JS </li>
                  <li> BootStrap </li>
                  <li> JavaScript </li>
                  <li> NPM </li>
                </ul>
                <p>*note : Use CORS extension to use this project because the API block CORS Policy</p>
                <p> Demo Project : <a href='https://react-botstraps.vercel.app/'>Here</a></p>
            </Col>
        </Row>
    </Container>
  )
}

export default Home