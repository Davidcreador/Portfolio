import React from 'react'
import './AboutPage.css'

// TODO: Move all these files to different folder
import nodeJsLogo from '../../../assets/images/nodejs-logo.svg'
import reactJsLogo from '../../../assets/images/react-logo.svg'
import angularLogo from '../../../assets/images/angular.svg'
import jsLogo from '../../../assets/images/javascript.svg'
import bitbucketLogo from '../../../assets/images/bitbucket.svg'
import bootstrapLogo from '../../../assets/images/bootstrap.svg'
import browserifyLogo from '../../../assets/images/browserify-icon.svg'
import couchdbLogo from '../../../assets/images/couchdb.svg'
import css3Logo from '../../../assets/images/css-3.svg'
import es6Logo from '../../../assets/images/es6.svg'
import expressLogo from '../../../assets/images/express.svg'
import foundationLogo from '../../../assets/images/foundation.svg'
import gitLogo from '../../../assets/images/git.svg'
import githubLogo from '../../../assets/images/github.svg'
import gruntLogo from '../../../assets/images/grunt.svg'
import gulpLogo from '../../../assets/images/gulp.svg'
import herokuLogo from '../../../assets/images/heroku.svg'
import html5Logo from '../../../assets/images/html-5.svg'
import jqueryLogo from '../../../assets/images/jquery.svg'
import keystonejsLogo from '../../../assets/images/keystonejs.svg'
import mailchimpLogo from '../../../assets/images/mailchimp.svg'
import materializecssLogo from '../../../assets/images/materializecss.svg'
import mongodbLogo from '../../../assets/images/mongodb.svg'
import mysqlLogo from '../../../assets/images/mysql.svg'
import npmLogo from '../../../assets/images/npm.svg'
import phpLogo from '../../../assets/images/php.svg'
import postgresqlLogo from '../../../assets/images/postgresql.svg'
import postmanLogo from '../../../assets/images/postman.svg'
import pouchdbLogo from '../../../assets/images/pouchdb.svg'
import pugLogo from '../../../assets/images/pug.svg'
import reactivexLogo from '../../../assets/images/reactivex.svg'
import reduxLogo from '../../../assets/images/redux.svg'
import sassLogo from '../../../assets/images/sass.svg'
import sketchLogo from '../../../assets/images/sketch.svg'
import terminalLogo from '../../../assets/images/terminal.svg'
import typescriptLogo from '../../../assets/images/typescript-icon.svg'
import vscLogo from '../../../assets/images/vsc.svg'
import vueLogo from '../../../assets/images/vue.svg'
import wordpressLogo from '../../../assets/images/wordpress.svg'
import yeomanLogo from '../../../assets/images/yeoman.svg'
import babelLogo from '../../../assets/images/babel.svg'
import cordovaLogo from '../../../assets/images/cordova.svg'

const AboutPage = () => (
  <div className="about-page">
    <div className="about-page-content">
      <h1 className="about-page-title title">I'm David Pastor</h1>
      <div className="about-content-body">
        <p>
          I am <strong>self-taught Software developer & Designer</strong>. <br /> I started as a graphic designer and
          then jumped into development. Now I walk the line of being both. I work as a Frontend/Backend(NodeJs) -
          developer. I am responsible, honest, serious, curious, fast-learner and loyal. Many of my work has been
          focused on developing and supporting websites/applications focused on UI, usability and helping people solve
          their problems. I live in Costa Rica and I've been doing this for 4+ years.
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
            <p>Full-stack Software Engineer at NTTDATA and Software developer consultant at Pamperedchef.com</p>
          </li>
          <li className="status-item">
            <div className="header-status-item">
              <h3 className="status-item-title">React Native/Web developer</h3>
            </div>
            <p>Web and Mobile development at La Creativeria.</p>
          </li>
          <li className="status-item">
            <div className="header-status-item">
              <h3 className="status-item-title">FullStack developer</h3>
            </div>
            <p>Fullstack development with NodeJs and Front-End technologies at Interaction Agency.</p>
          </li>
          <li className="status-item">
            <div className="header-status-item">
              <h3 className="status-item-title">Designer & Web developer</h3>
            </div>
            <p>Web design and Front-End technologies at TEAH720 Agency.</p>
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
              <img className="skill-item-logo" src={nodeJsLogo} alt="NodeJs" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={reactJsLogo} alt="ReactJs" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={angularLogo} alt="Angular" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={jsLogo} alt="JavaScript" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={bitbucketLogo} alt="BitBucket" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={bootstrapLogo} alt="Bootstrap" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={browserifyLogo} alt="Browserify" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={couchdbLogo} alt="CouchDB" />
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
              <img className="skill-item-logo" src={expressLogo} alt="Express" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={foundationLogo} alt="Foundation" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={gitLogo} alt="Git" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={githubLogo} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={gruntLogo} alt="Grunt" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={gulpLogo} alt="Gulp" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={herokuLogo} alt="Heroku" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={html5Logo} alt="HTML5" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={jqueryLogo} alt="JQuery" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={keystonejsLogo} alt="Keystonejs" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={mailchimpLogo} alt="Mailchimp" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={materializecssLogo} alt="MaterializeCSS" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={mongodbLogo} alt="MongoDB" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={mysqlLogo} alt="MySQL" />
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
              <img className="skill-item-logo" src={postgresqlLogo} alt="postgresql" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={postmanLogo} alt="postman" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={pouchdbLogo} alt="pouchdbLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={pugLogo} alt="pugLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={reactivexLogo} alt="reactivexLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={reduxLogo} alt="reduxLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={sassLogo} alt="sassLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={sketchLogo} alt="sketchLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={terminalLogo} alt="terminalLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={typescriptLogo} alt="typescriptLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={vscLogo} alt="vscLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={vueLogo} alt="vueLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={wordpressLogo} alt="wordpressLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={yeomanLogo} alt="yeomanLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={babelLogo} alt="babelLogo" />
            </a>
          </li>
          <li>
            <a href="">
              <img className="skill-item-logo" src={cordovaLogo} alt="cordovaLogo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="about-page-image" />
  </div>
)

export default AboutPage
