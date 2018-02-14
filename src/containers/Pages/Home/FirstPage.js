import React, { Component } from 'react'
import './FirstPage.css'
import { Logo } from '../../../components/Logo'

class FirstPage extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body has-text-centered">
          <Logo />
          <h2 className="subtitle">Software Development - Design - Life</h2>
        </div>
      </section>
    )
  }
}

export default FirstPage
