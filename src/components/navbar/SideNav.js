import React, { Component } from 'react';

class SideNav extends Component {

    closeSideNav(){
        document.getElementById('side-menu').style.width = '0px'
    }

    render(){
        return(
            <div style={styles.sideNav} id="side-menu" className="side-nav">
                <a onClick={this.closeSideNav.bind(this)} style={styles.sideNavA} href="#" className="btn-close" >&times;</a>
                <a style={styles.sideNavA} href="#">Home</a>
                <a style={styles.sideNavA} href="#">Services</a>
                <a style={styles.sideNavA} href="#">About Us</a>
                <a style={styles.sideNavA} href="#">Contact</a>
            </div>
        )
    }
}

const styles = {
    sideNav : {
        height: "100%",
        width: 0,
        position: 'fixed',

        top: 0,
        left: 0,
        backgroundColor: "#111",
        opacity: 0.7,
        overflowX: 'hidden',
        paddingTop: 60,
        transition: "1s",
    },
    sideNavA : {
        padding: 10,
        paddingBottom: 30,
        textDecoration: "none",
        fontSize: 22,
        color: "#ccc",
        display: 'block',
        transition: "1s"
    }
};


export default SideNav