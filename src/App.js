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
    else if(page === "About"){
      console.log(page);
      this.contentArea = [
        <About/>
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
      this.contentArea = (<Portfolio click={this.dialogHandler} app={this} images={exportObject.Portraits[0].array}/>);
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
    else if(page === "Work"){
      //console.log(exportObject);
      this.setState({
        currentPage: "Work"
      });
    }
    else{
      this.contentArea = (<LandingImage />);
      this.landingPageClicked=true;
      this.setState({
        currentPage: "Home"
      });
    }
    
    if(page !== "Work" && window.innerWidth<800){
      this.leftNavHandler();
    }
  }

  //Menu button Handler
  LeftNavigation;
  leftNavHandler = () => {
    var leftNav = !this.state.LeftNav;
    
    this.setState({
      LeftNav: leftNav
    });
  }

  leftNavVar=true;
  menuButton=false;
  landingPageClicked=false;
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


  render(){    
    if(this.leftNavVar===false){
      this.LeftNavigation =(<LeftNavigator menuButton={this.menuButton} leftNavHandler={this.leftNavHandler} style={false} click={this.switchContentAreaHandle} homeClicked={this.landingPageClicked} currentPage={this.state.currentPage}/>);
      this.leftNavVar=true;
      this.setState({LeftNav: false});
    }
    else
      this.LeftNavigation =(<LeftNavigator menuButton={this.menuButton} leftNavHandler={this.leftNavHandler} style={this.state.LeftNav} click={this.switchContentAreaHandle} homeClicked={this.landingPageClicked} currentPage={this.state.currentPage}/>);

    if(this.landingPageClicked)
      this.landingPageClicked=false;

    return (
      <div style={{width:this.width, height: this.height}} className="App">
        <div className="AppContainer" >
          {this.LeftNavigation}
          {this.contentArea}
          {this.dialogVariable}
        </div>
      </div>
    );
  }
}

export default App;