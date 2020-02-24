import React, { Component } from "react";
import Button from './Button'

class Bubble extends Component{
    render(){
        return(
            <div className='bubble_container'>
                <div className={this.props.bubbleClass}> 
                    <p> {this.props.text1} <strong> {this.props.strongText} </strong> {this.props.text2}</p>
                    <Button buttonClass='button button_started' text ='Get Started'/>
                </div>
            </div>
        )
    }
}
// Bubble take 4 props: bubbleClass,  & Text1,strongText,Text2 (<P> Text1,strongText,Text2</p>)
export default Bubble