import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';
import img1 from '../image/image1.png'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/tsTZZz9/screenshot-mdimran181-github-io-2021-04-21-00-46-31.png) center / cover'}} >NABO</CardTitle>
            <CardText>
              Penguins fashion is the basic e-commerce website design by me .
              Built on  HTML5 / CSS / Bootstrap and JavaScript.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/mdimran181/penguin-fashion" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              <Button colored><a href="https://mdimran181.github.io/penguin-fashion/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/hVKZHgv/screenshot-mdimran181-github-io-2021-04-21-00-59-38.png) center / cover'}} >Banking Project</CardTitle>
            <CardText>
              This is banking project. a user can add money and withdraw money from this project
            </CardText>
            <CardActions border>

              <Button colored><a href="https://github.com/mdimran181/imran-bank" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              <Button colored><a href="https://mdimran181.github.io/imran-bank/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/4fmk2rR/screenshot-mdimran181-github-io-2021-04-21-01-05-27.png) center / cover'}} >thought.food</CardTitle>
            <CardText>
              Flight booking project.From this project a passanger can book him/her flight.This project is built by html/css/ javascript
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/mdimran181/flight-booking" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              <Button colored><a href="https://mdimran181.github.io/flight-booking/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
            </CardActions>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/tJZZHqd/Screen-Shot-2019-09-25-at-03-54-48.png) center / cover'}} >Shopify webstore</CardTitle>
            <CardText>
              Global organic coffee brand. Customized theme (Ruby/Shopify).
            </CardText>
             <CardActions border>
{/* 
              <Button colored><a href="" target="_blank" rel="noopener noreferrer">Live Site</a></Button> */}
            </CardActions>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/yVxHg3F/Screen-Shot-2019-09-25-at-03-31-56.png) center / cover'}} >Showreel</CardTitle>
            <CardText>
              Wordpress fullscreen video page. Portofolio site for my work as a filmmaker and photographer.
            </CardText>
            <CardActions border>

              {/* <Button colored><a href="https://www.kjartanmanvelyan.com" target="_blank" rel="noopener noreferrer">Live Site</a></Button> */}
            </CardActions>
          </Card>


         {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/48540892/77366426-46c3ad00-6d58-11ea-8d29-12257e2a279c.png) center / cover'}} >Python API</CardTitle>
            <CardText>
              Customized Wordpress site for the German insurance company QIRA.
            </CardText>
            <CardActions border>

              {/* <Button colored><a href="http://qira.de" target="_blank" rel="noopener noreferrer">Live Site </a></Button> */}
            </CardActions>
          </Card>

         {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/m9XBbP5/Screen-Shot-2019-09-30-at-17-21-57.png) center / cover'}} >Mr Cocktail</CardTitle>
            <CardText>
              A react-based web application running HTML, CSS and JavaScript.
            </CardText>
             <CardActions border>

              {/* <Button colored><a href="https://github.com/kjartur/rails-mister-cocktail" target="_blank" rel="noopener noreferrer">GitHub</a></Button> */}
            </CardActions>
          </Card>
          </div>

      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is Shopify</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>JS/React</Tab>
          <Tab>Shopify</Tab>
          <Tab>Wordpress</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
