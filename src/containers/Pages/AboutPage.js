import React, { Component } from 'react';
import './AboutPage.css';
import nodeJsLogo from './assets/nodejs-logo.svg';
import reactJsLogo from './assets/react-logo.svg';
import angularLogo from './assets/angular.svg';
import jsLogo from './assets/javascript.svg';
import bitbucketLogo from './assets/bitbucket.svg';
import bootstrapLogo from './assets/bootstrap.svg';
import browserifyLogo from './assets/browserify-icon.svg';
import couchdbLogo from './assets/couchdb.svg';
import css3Logo from './assets/css-3.svg';
import es6Logo from './assets/es6.svg';
import expressLogo from './assets/express.svg';
import foundationLogo from './assets/foundation.svg';
import gitLogo from './assets/git.svg';
import githubLogo from './assets/github.svg';
import gruntLogo from './assets/grunt.svg';
import gulpLogo from './assets/gulp.svg';
import herokuLogo from './assets/heroku.svg';
import html5Logo from './assets/html-5.svg';
import jqueryLogo from './assets/jquery.svg';
import keystonejsLogo from './assets/keystonejs.svg';
import mailchimpLogo from './assets/mailchimp.svg';
import materializecssLogo from './assets/materializecss.svg';
import mongodbLogo from './assets/mongodb.svg';
import mysqlLogo from './assets/mysql.svg';
import npmLogo from './assets/npm.svg';
import phpLogo from './assets/php.svg';
import postgresqlLogo from './assets/postgresql.svg';
import postmanLogo from './assets/postman.svg';
import pouchdbLogo from './assets/pouchdb.svg';
import pugLogo from './assets/pug.svg';
import reactivexLogo from './assets/reactivex.svg';
import reduxLogo from './assets/redux.svg';
import sassLogo from './assets/sass.svg';
import sketchLogo from './assets/sketch.svg';
import terminalLogo from './assets/terminal.svg';
import typescriptLogo from './assets/typescript-icon.svg';
import vscLogo from './assets/vsc.svg';
import vueLogo from './assets/vue.svg';
import wordpressLogo from './assets/wordpress.svg';
import yeomanLogo from './assets/yeoman.svg';
import babelLogo from './assets/babel.svg';
import cordovaLogo from './assets/cordova.svg';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-page-content">
          <h1 className="about-page-title title">I'm David Pastor</h1>
          <div className="about-content-body">
            <p>
              I am <strong>self-taught Software developer & Designer</strong>.{' '}
              <br /> Started as a graphic designer and then jumped into
              development. Now I walk the line of being both. I work as a
              Frontend/Backend(NodeJs) - developer. I am responsible, honest,
              serious, curious, fast-learner and loyal, just some
              characteristics of many more. I love to workout/exercise, also I
              am a musician and for me it is very important taking care of the
              people around me. Many of my work have been focused on developing
              and supporting websites focused on UI, usability and helping
              people solve their problems. I live in Costa Rica and I've been
              doing this for 4+ years.
            </p>
          </div>

          <div className="current-status">
            <h2 className="subtitle">
              <strong>Current status:</strong>
            </h2>
            <ul className="current-status-items">
              <li className="status-item status-active">
                <div className="header-status-item">
                  <h3 className="status-item-title">Freelance</h3>
                  <span className="status-state">Current</span>
                </div>
                <p>
                  Front-end development on a reliable review database for
                  prospective NYC renters.
                </p>
              </li>
              <li className="status-item">
                <div className="header-status-item">
                  <h3 className="status-item-title">
                    React Native/Web developer
                  </h3>
                </div>
                <p>Web and Mobile development in La Creativeria.</p>
              </li>
              <li className="status-item">
                <div className="header-status-item">
                  <h3 className="status-item-title">FullStack developer</h3>
                </div>
                <p>
                  Fullstack development with NodeJs and Front-End technologies
                  in Interaction Agency.
                </p>
              </li>
            </ul>
          </div>

          <div className="skills-table">
            <h2 className="subtitle">
              <strong>Some of my skills:</strong>
            </h2>
            <ul className="skill-list">
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={nodeJsLogo}
                    alt="NodeJs"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={reactJsLogo}
                    alt="ReactJs"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={angularLogo}
                    alt="Angular"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={jsLogo}
                    alt="JavaScript"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={bitbucketLogo}
                    alt="BitBucket"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={bootstrapLogo}
                    alt="Bootstrap"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={browserifyLogo}
                    alt="Browserify"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={couchdbLogo}
                    alt="CouchDB"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="skill-item-logo" src={css3Logo} alt="CSS3" />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="skill-item-logo" src={es6Logo} alt="ES6" />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={expressLogo}
                    alt="Express"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={foundationLogo}
                    alt="Foundation"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="skill-item-logo" src={gitLogo} alt="Git" />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={githubLogo}
                    alt="GitHub"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={gruntLogo}
                    alt="Grunt"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="skill-item-logo" src={gulpLogo} alt="Gulp" />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={herokuLogo}
                    alt="Heroku"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={html5Logo}
                    alt="HTML5"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={jqueryLogo}
                    alt="JQuery"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={keystonejsLogo}
                    alt="Keystonejs"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={mailchimpLogo}
                    alt="Mailchimp"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={materializecssLogo}
                    alt="MaterializeCSS"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={mongodbLogo}
                    alt="MongoDB"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={mysqlLogo}
                    alt="MySQL"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="skill-item-logo" src={npmLogo} alt="Npm" />
                </a>
              </li>
              <li>
                <a href="">
                  <img className="skill-item-logo" src={phpLogo} alt="Php" />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={postgresqlLogo}
                    alt="postgresql"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={postmanLogo}
                    alt="postman"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={pouchdbLogo}
                    alt="pouchdbLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={pugLogo}
                    alt="pugLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={reactivexLogo}
                    alt="reactivexLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={reduxLogo}
                    alt="reduxLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={sassLogo}
                    alt="sassLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={sketchLogo}
                    alt="sketchLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={terminalLogo}
                    alt="terminalLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={typescriptLogo}
                    alt="typescriptLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={vscLogo}
                    alt="vscLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={vueLogo}
                    alt="vueLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={wordpressLogo}
                    alt="wordpressLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={yeomanLogo}
                    alt="yeomanLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={babelLogo}
                    alt="babelLogo"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    className="skill-item-logo"
                    src={cordovaLogo}
                    alt="cordovaLogo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-page-image" />
      </div>
    );
  }
}
