import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div> 
                <h1>Mohamed's Portfolio</h1>
                <ul className="nav">
                    <li> 
                        <a href="#aboutme">About me</a>
                        
                    </li>
                    <li>
                        <a href="#myportfolio">My Portfolio</a>
                    </li>
                    <li>
                        <a href="#myblog">My Blog</a>
                    </li>
                    

                    
                    </ul>
            </div>
        );
    }
}

export default Navigation;

