import React, { Component } from 'react';
import TopNav from './TopNav'
import SideNav from './SideNav'


class NavBar extends Component {

    constructor(props){
        super(props)

    }

    openSideMenu(){
        this.setState({ sideMenuOpen : true })
    }



    render(){
        return(
            <div>
                <TopNav />
                <SideNav/>
            </div>
        )
    }
}



export default NavBar