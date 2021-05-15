import React, { Component, Fragment } from "react";
import "./App.css";
import Navi from "./comp/Navi";
import Hero from "./comp/Hero";
import Search from "./comp/Search";
import Body from "./comp/Body";
import Footer from "./comp/Footer";
import { v4 as rndm } from 'uuid';

class App extends Component {
    state = {
      status: ""
    }
  async checkOnlineStatus(){
    try {
      const online = await fetch(window.location.href+rndm(), {
        cache: 'no-cache'
      });
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };

 

  render() {
    setInterval(async () => {
      const result = await this.checkOnlineStatus();
      let status = result ? "online" : "offline";
   
      if(this.state.status !== status){
        this.setState({
          status
        });
      }
           
    }, 3000);

    return (

      <Fragment>
        <Navi />
        <Hero />
        <Search status={this.state.status}/>
        <Body status={this.state.status}/>
        <Footer />
      </Fragment>
    );
  }
}


export default App;
