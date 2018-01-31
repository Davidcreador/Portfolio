import React, { Component } from 'react';
import { data } from './data';
import './ProjectsPage.css';

export default class ProjectsPage extends Component {
  renderProjects = () => {
    return data.projects.map((e, i) => {
      return (
        <li key={i} className="column is-one-third">
          <div className="project-item">
            <div className="card bm--card-equal-height">
              <div className="card-image">
                <figure className="image">
                  <img src={e.image} alt="Placeholder" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title">
                      <a
                        className="project-item-link"
                        target="_blank"
                        href={e.link}
                      >
                        {e.name}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="content">{e.description}</div>
                <div className="tags">
                  {e.tags.map((t, i) => (
                    <a className="tag" key={i} href="">
                      #{t}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="projects-page">
        <h1 className="title">Projects</h1>
        <div className="projects-list">
          <ul className="columns is-multiline is-variable is-2">
            {this.renderProjects()}
          </ul>
        </div>
      </div>
    );
  }
}
