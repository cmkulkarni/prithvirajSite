import React, {Component} from 'react';
import './App.css';
import LeftNavigator from './LeftNavigator/LeftNavigator';
import LandingImage from './LandingImage/LandingImage';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About.js';
import Fashion from './Fashion/Fashion.js';
import Slider from './Components/photoSlider/Slider.js';
import Contact from './Contact/Contact';
import exportObject from './ImageSource.js';

class App extends Component {
  state = {
    currentPage : "Home",
    LeftNav: true
  };

  //For image pop up dialog
  dialogVariable = null;
  dialogHandler(obj){
    console.log("Dialog opened!");
    this.dialogVariable = <Slider 
                            closeClick={this.dialogCloseHandler.bind(this,"")} 
                            series={obj.series}
                          />;
    this.setState({
      currentPage: obj.page
    });
  } 
  dialogCloseHandler(){
    this.dialogVariable = null;
    this.setState({
      currentPage: ""
    });
  }

  contentArea = (<LandingImage />)  
  switchContentAreaHandle = (page) => {
    if(page === "Portfolio"){
      this.contentArea = (<Portfolio click={this.dialogHandler} app={this} images={exportObject.portfolios}/>);
      this.setState({
        currentPage: "Portfolio"
      });
    }
    else if(page === "Work")
      console.log(page);
    else if(page === "About"){
      console.log(page);
      this.contentArea = [
        <About/>,
        <iframe className="contactForm" src="https://docs.google.com/forms/d/e/1FAIpQLSe8s_6jTQDRsp33lByT5SqsaJERrUX6mg6dzWC-HtKhbpmaQQ/viewform?embedded=true" width="640" height="1018" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      ];
      this.setState({
        currentPage: "About"
      });
    }
    else if (page === "Contact"){
      console.log(page);
      this.contentArea = [
        <Contact key="1"/>
      ];
      this.setState({
        currentPage: "Contact"
      });
    }
    else if(page === "- Fashion & People"){
      this.contentArea = (<Fashion click={this.dialogHandler} app={this} series={exportObject.Images_Fashion}/>);
      this.setState({
        currentPage: "- Fashion & People"
      }); 
    }
    else if(page === "- Portraits"){
      console.log(exportObject);
      this.contentArea = (<Fashion click={this.dialogHandler} app={this} series={exportObject.Portraits}/>);
      this.setState({
        currentPage: "- Portraits"
      }); 
    }
    else if(page === "- Landscapes & Streets"){
      console.log(exportObject);
      this.contentArea = (<Fashion click={this.dialogHandler} app={this} series={exportObject.Landscapes}/>);
      this.setState({
        currentPage: "- Landscapes & Streets"
      }); 
    }
    else{
      this.contentArea = (<LandingImage />);
      this.setState({
        currentPage: "Home"
      });
    }
  }

  //Menu button Handler
  leftNavHandler = () => {
    var leftNav = !this.state.LeftNav;
    
    this.setState({
      LeftNav: leftNav
    });
  }

  leftNavVar=true;
  menuButton=false;
  width=0;
  height = 0;
  constructor(props){
    super(props);
    this.height = window.innerHeight;
    this.width = window.innerWidth-20;

    if(window.innerWidth<800){
      this.leftNavVar=false;
      this.menuButton=true;
    }
  }

  listenScrollEvent(e){
    console.log(e);
  }

  render(){    
    var LeftNavigation;
    if(this.leftNavVar===false){
      LeftNavigation =(<LeftNavigator menuButton={this.menuButton} leftNavHandler={this.leftNavHandler} style={false} click={this.switchContentAreaHandle}/>);
      this.leftNavVar=true;
      this.setState({LeftNav: false});
    }
    else
      LeftNavigation =(<LeftNavigator menuButton={this.menuButton} leftNavHandler={this.leftNavHandler} style={this.state.LeftNav} click={this.switchContentAreaHandle}/>);

    return (
      <div style={{width:this.width, height: this.height}} className="App">
        <div className="AppContainer"  onScroll={this.listenScrollEvent}>
          {LeftNavigation}
          {this.contentArea}
          {this.dialogVariable}
        </div>
      </div>
    );
  }
}

export default App;