import React, { Component } from 'react';
import  { Icon }  from 'react-fa';
import NavLink from './NavLink'

class TopNav extends Component {

    openSideMenu(){
        document.getElementById('side-menu').style.width = '250px'
    }


    render(){
        return(
            <div>
                <nav style={styles.NavStyle} className="navbar">
                    <span className="open-slide">
                        <a style={styles.ListStyle} href="#" onClick={this.openSideMenu.bind(this)}>
                        <button className="IconButton">
                            <Icon name="navicon" size="2x"/>
                        </button>
                        </a>
                    </span>

                    <ul className="navbar-nav">
                        <NavLink ref="#">Home</NavLink>
                        <NavLink ref="#">Services</NavLink>
                        <NavLink ref="#">About Us</NavLink>
                        <NavLink ref="#">Contact</NavLink>
                    </ul>
                </nav>
            </div>
        )
    }
}

const styles = {
    NavStyle : {
        backgroundColor: '#3b5998',
        overflow: 'hidden',
        height : 63,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ListStyle : {
        float: 'left',
        display: 'block',
        color: '#f2f2f2',
        textAlign: 'center',
        padding: 14,
    }
};

export default TopNav