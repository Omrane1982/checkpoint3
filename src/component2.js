import React, { Component } from 'react';
class Card2 extends React.Component{
    render(){
        return(
           
            <div >
                
                <h1>{this.props.statis}</h1>
                <h2>{this.props.statis2}</h2>
                <h3>{this.props.statis3}</h3>
                



            </div>

           
        )

        
    }
}
export default Card2;