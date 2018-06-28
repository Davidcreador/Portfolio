import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition'
import 'bulma/css/bulma.css'
import '../assets/css/font-awesome.css'
import './App.css'

// Shared Components
import NavBar from '../components/NavBar'

// Pages
import FirstPage from './Pages/Home/FirstPage'
import AboutPage from './Pages/About/AboutPage'
import ProjectsPage from './Pages/Projects/ProjectsPage'
import ContactPage from './Pages/Contact/ContactPage'
// import NoMatch from '../components/NoMatch'

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  }
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  })
}

class App extends Component {
  state = {
    expanded: false
  }

  render() {
    const bounceTransition = {
      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8)
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: bounce(1),
        scale: bounce(1)
      }
    }

    return (
      <div className={this.state.expanded ? 'main-wrapper fullscreen' : 'main-wrapper'}>
        <NavBar expanded={this.state.expanded} />
        <Switch>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="switch-wrapper"
          >
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route component={FirstPage} />
          </AnimatedSwitch>
        </Switch>
      </div>
    )
  }
}

export default App
