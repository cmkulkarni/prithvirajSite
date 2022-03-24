import React, {Component} from 'react';import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import LeftNavigator from './LeftNavigator/LeftNavigator';

import LandingImage from './LandingImage/LandingImage';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About.js';
import Fashion from './Fashion/Fashion.js';

import Slider from './Components/photoSlider/Slider.js';
import Footer from './Components/Footer/Footer.js';

import exportObject from './ImageSource.js';
import loadImagesAsync from './imageLoader.js';

class App extends Component {
  state = {
    currentPage : "Home",
    LeftNav: true
  };
  contentArea=(<LandingImage />);
  //For image pop up dialog
  dialogVariable = null;
  dialogHandler(obj){
    console.log("Dialog opened!");
    var src = obj.src;
    var index = 0;
    if(obj.src.hasOwnProperty("seriesTopImage"))
      src = obj.src.seriesTopImage;

    obj.series.forEach(function(imageOfSeries,indexOfArray){
      if(Array.isArray(imageOfSeries) && imageOfSeries.includes(src))
        index = indexOfArray;
      else if(src === imageOfSeries)
        index = indexOfArray;
        
    });
    this.dialogVariable = <Slider 
                            closeClick={this.dialogCloseHandler.bind(this,"")} 
                            series={obj.series}
                            src={src}
                            index={index}
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

  changeContentPage = function(page){
    // this.setState({
    //   currentPage: page
    // });
    alert(page);
  };
 
  switchContentAreaHandle = (page) => {



    if(page === "Portfolio"){

      loadImagesAsync(0, 31);
      this.contentArea=(<Portfolio click={this.dialogHandler} app={this} images={exportObject.portfolios} width="85%"/>);
      this.setState({
        currentPage: "Portfolio"
      });
    }
    else if(page === "About"){
      this.contentArea=(<About/>);
      this.setState({
        currentPage: "About"
      });
    }
    else if(page === "- Fashion & People"){

      loadImagesAsync(90, 151);
      this.contentArea=(<Fashion click={this.dialogHandler} app={this} series={exportObject.Images_Fashion}/>);
      this.setState({
        currentPage: "- Fashion & People"
      }); 
    }
    else if(page === "- Food"){

      loadImagesAsync(278);
      this.contentArea=(<Portfolio click={this.dialogHandler} app={this} images={exportObject.Food[0].array} width="60%"/>);
      this.setState({
        currentPage: "- Food"
      }); 
    }
    else if(page === "- Still Life & Products"){

      loadImagesAsync(278);
      this.contentArea=(<Portfolio click={this.dialogHandler} app={this} images={exportObject.StillLifeAndProduct[0].array} width="60%"/>);
      this.setState({
        currentPage: "- Still Life & Products"
      }); 
    }
    else if(page === "- Portraits"){
      
      loadImagesAsync(32,90);
      this.contentArea=(<Portfolio click={this.dialogHandler} app={this} images={exportObject.Portraits[0].array} width="60%"/>);
      this.setState({
        currentPage: "- Portraits"
      }); 
    }
    else if(page === "- Landscapes & Streets"){
      
      loadImagesAsync(151, 291);
      this.contentArea=(<Fashion click={this.dialogHandler} app={this} series={exportObject.Landscapes}/>);
      this.setState({
        currentPage: "- Landscapes & Streets"
      }); 
    }
    else if(page === "Work"){

      loadImagesAsync(32, 77);
      this.setState({
        currentPage: "Work"
      });
    }
    else{
      
      this.contentArea=(<LandingImage />);
      this.landingPageClicked=true;
      this.setState({
        currentPage: "Home"
      });
    }
    
    if(page !== "Work" && window.innerWidth<1000){
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

    var a = window.location.href.split("/");
    if(a.length>5){
      a.splice(4,1);
      window.location.href = a.join("/");
    }

    //loadImagesAsync(0, 31);

    if(window.innerWidth<1000){
      this.leftNavVar=false;
      this.menuButton=true;
    }
  }


  render(){    
    if(this.leftNavVar===false){
      this.LeftNavigation =(<LeftNavigator changeContentPage={this.changeContentPage} menuButton={this.menuButton} leftNavHandler={this.leftNavHandler} click={this.switchContentAreaHandle} homeClicked={this.landingPageClicked} currentPage={this.state.currentPage}/>);
      this.leftNavVar=true;
      this.setState({LeftNav: false});
    }
    else
      this.LeftNavigation =(<LeftNavigator changeContentPage={this.changeContentPage} menuButton={this.menuButton} leftNavHandler={this.leftNavHandler} style={this.state.LeftNav} click={this.switchContentAreaHandle} homeClicked={this.landingPageClicked} currentPage={this.state.currentPage}/>);

    if(this.landingPageClicked)
      this.landingPageClicked=false;

    return (
      <div style={{width:this.width, height: this.height}} className="App">

        <div className="AppContainer" >
          <Router>
            {this.LeftNavigation}
            
            <Switch>

              <Route exact path="/">
                <LandingImage />
              </Route>
              
              <Route path="/Portfolio">
                <Portfolio click={this.dialogHandler} app={this} images={exportObject.portfolios} width="85%"/>
              </Route>

              <Route path="/Work">
                {this.contentArea}
              </Route>

              <Route path="/Food">
                <Portfolio click={this.dialogHandler} app={this} images={exportObject.Food[0].array} width="60%"/>
              </Route>

              <Route path="/StillLifeAndProducts">
                <Portfolio click={this.dialogHandler} app={this} images={exportObject.StillLifeAndProduct[0].array} width="60%"/>
              </Route>

              <Route path="/FashionAndPeople">
                <Fashion click={this.dialogHandler} app={this} series={exportObject.Images_Fashion}/>
              </Route>

              <Route path="/Portraits">
                <Portfolio click={this.dialogHandler} app={this} images={exportObject.Portraits[0].array} width="60%"/>
              </Route>

              <Route path="/LandscapesAndStreets">
                <Fashion click={this.dialogHandler} app={this} series={exportObject.Landscapes}/>
              </Route>


              <Route path="/About">
                <About/>
              </Route>

              
            </Switch>

            {this.dialogVariable}
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;