import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../image/profile.png'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profile}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Md Emran</h1>
          <h3><i>Software Developer</i></h3>
          <p>I'm a md Emran fullstack developer and entrepreneur, and student of daffodil international
            university department of software engineering. My main interests are DevOps and web application development. 
            I'm also a big fan of AI and machine learning and Specially data science.</p>
            <hr/>

          <p><b>HTML/CSS | JavaScript | React | R |Java | python | Git | wordpress | SQL/NOSQL | Firebase</b></p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/md-emran-swe181/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/mdimran181/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* AngelList */}
          <a href="https://twitter.com/ImranTheSpecial" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
