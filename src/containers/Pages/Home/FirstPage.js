import React from 'react'
import './FirstPage.css'
import { Logo } from '../../../components/Logo'
import Status from '../../../components/Status'

const FirstPage = () => (
  <section className="hero">
    <div className="hero-body has-text-centered">
      <Logo />
      <h2 className="subtitle">Software Development - Design</h2>
      <Status />
    </div>
  </section>
)

export default FirstPage
