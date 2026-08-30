import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Educations from './components/Educations'
import Contacts from './components/contacts'

function App() {

  return (
    <>
     <Navbar name={"Priyanshu"}></Navbar>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Educations></Educations>
      <Contacts></Contacts>
    </>
  )
}

export default App
