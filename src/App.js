import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './navigation/navigation';
import Portfolio from './portfolio/portfolio';
import Blog from './blog/blog';
import Aboutme from './aboutme/aboutme';


class App extends Component {
  render() {
    return (
      <div>
        
         <Navigation></Navigation>
         <Aboutme></Aboutme>
         <Portfolio></Portfolio>
         <Blog></Blog>
      
      
         
      </div>
    );
  }
}

export default App;
