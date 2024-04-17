import React from 'react'
import Layout from '../components/layout/layout'
import { useLocation } from 'react-router-dom'



const About = () => {
  const value = useLocation().pathname



  return (
    <Layout >{JSON.stringify(value)}</Layout>
  )
}

export default About