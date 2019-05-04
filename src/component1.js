import React, { Component } from 'react';
import"./component2.css"
class Card extends React.Component{
    render(){
        return(
           
            <div  >
                <button style={this.props.styleButton } >{this.props.title}</button>
                <p style={this.props.style }>{this.props.paragraph}</p>
                <button style={this.props.styleButton } >Savoir Plus</button>
            </div>

           
        )

        
    }
}
export default Card;