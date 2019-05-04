import React, { Component } from 'react';
class Card3 extends React.Component{
    render(){
        return(
           
            <div >
                
               <img src={this.props.img} > </img>
                <h3>{this.props.location}</h3>
                
                



            </div>

           
        )

        
    }
}
export default Card3;