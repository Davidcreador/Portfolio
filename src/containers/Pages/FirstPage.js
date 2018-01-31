import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './FirstPage.css';
import { Logo } from '../../components/Logo';

// Redux binding
import * as userActions from '../../actions/user';

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

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstPage)