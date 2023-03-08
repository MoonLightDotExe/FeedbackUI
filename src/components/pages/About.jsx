import React from 'react'
import Card from './../shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
        <h1> About Us </h1>
        <p>
            This is a starter Project. 
        </p>
        <p> Version 1.0.0 </p>

        <p><Link to='/'>Back to Home Page</Link></p>
    </Card>
  )
}

export default About
