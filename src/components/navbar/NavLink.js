import React, { Component } from 'react';

// Warning: This component is an <li> component use it between <ul>
class NavLink extends Component {

    onHover(e){
        e.target.style.backgroundColor = "lightgrey"
    }

    notHover(e){
        e.target.style.backgroundColor = '#3b5998'
    }

    render(){
        const { liStyle, textStyle } = styles;
        return(
            <li style={liStyle}>
                <a  style={textStyle}
                    href={this.props.ref}
                    onMouseOver={this.onHover.bind(this)}
                    onMouseLeave={this.notHover.bind(this)}>
                    {this.props.children}
                </a>
            </li>
        )
    }
}

const styles = {
    liStyle : {
        float: 'right',
        display: 'block',
        listStyle: 'none',
        paddingTop: 14,
        paddingLeft: 16,
        paddingRight: 16
    },
    textStyle : {
        textAlign: 'center',
        color: '#f2f2f2',
        textDecoration: 'none',
        fontSize: 17,
        padding: 10
    }
};

export default NavLink