import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>

            </div>
            <div class="resume_text">
            <h2 style={{paddingTop: '2em'}}>Biography</h2>
            <h4 style={{color: 'white'}}>Md Emran</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi, I'm Emran. I grew up on a small village on Chandpur District, and have been a technologist since I built my first computer in the 2015s. 
              My main interests are DevOps and web application development.Recently i try to learning data science.
            <p></p><p>I am currently learning AI and machine learning technique for data science.</p>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Permanent Address</h5>
            <p>Faridgonj,Chandpur, Bangladesh</p>
            <h5>Present Address</h5>
            <p>Dhaka,Bangladesh 1215.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Coursera: Fullstack Web Developer"
              schoolDescription="
              Coursera is ranked as the worlds best online learning platform for the 10 years. Lecture and exercise topics includes:
              Javascript,React on Javascript, OOP, APIs, JSON, Scraping, Relational DB, SQL, NOsql, HTML, CSS, Bootstrap, JavaScript ES6, React, EXPRESS, Prototyping, UI Design, 
              Test Driven Development, Git, Github, Technical Workflow."
              />

               <Education
                 startYear={2018}
                 endYear={2022}
                 schoolName="Daffodil International University"
                 schoolDescription=" I am currently student of Department of software engineering in
                 Daffodil International Univeristy.DIU is one of the best private university in Bangladesh.From this 
                 degree i learn lot of essential knowledge such as life cycle of software and architecture of software."
                  />

                  <Education
                    startYear={2015}
                    endYear={2017}
                    schoolName="Hajigonj model College"
                    schoolDescription="I was completed my hsc from hajigonj model college,chandpur"
                    />

              <hr style={{borderTop: '3px solid #f0145f'}} />
              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2021}
              jobName="Fullstack Developer / Consultant"
              jobDescription="Technical consultations for startups, Programming Hero Teams"
              />

                <Experience
                  startYear={2019}
                  endYear={2020}
                  jobName="Learning And Earning Project"
                  jobDescription="Learning and earnig project one of the largest e-learning platform, founded by ICT ministry of Bangladesh"
                  />

               

                      <Experience
                        startYear={2020}
                        endYear={2021}
                        jobName="Cybersecurity and Awaken Program  "
                        jobDescription=" Cybersecurity and Awaken Program is one of the famous program by Cyberlife
                        .I am currently work with this team for awaken people about online advantage and disadvantage  "
                        />
                         <Experience
                        startYear={2020}
                        endYear={2021}
                        jobName="Freelanching on fiverr and upwork "
                        jobDescription=" I am still works on fiverr and upwork as a web developer.I have completed lot of real
                        life project such as, e-commerce, doctors-portal etc"
                        />

              <hr style={{borderTop: '3px solid #f0145f'}} />
              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={90}
                />
                <Skills
                    skill="Java"
                    progress={60}
                    />
                    <Skills
                      skill="HTML/CSS"
                      progress={95}
                      />
                      <Skills
                        skill="Linux"
                        progress={50}
                        />
                        <Skills
                          skill="React"
                          progress={80}
                          />
                          <Skills
                            skill="Expree"
                            progress={55}
                            />
                            <Skills
                            skill="NoSQL"
                            progress={50}
                            />
                            <Skills
                            skill="SQL"
                            progress={80}
                            />
                            <Skills
                            skill="python"
                            progress={65}
                            />
                             <Skills
                            skill="Git"
                            progress={40}
                            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
