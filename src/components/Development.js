import React, { Component } from "react";

const deveContent = 
    {design: 'Design Content is here...Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue.  Donec in luctus ante, sit amet euismod augue',
    producion: 'Production content is here...Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue.  Donec in luctus ante, sit amet euismod augue'
}
class Development extends Component {
    state = {    
        deveContent:deveContent,
        current:deveContent.design
  }   
 prodChange = ()=>{
  this.setState({current:this.state.deveContent.producion})
 } 
 designChange = ()=>{
    this.setState({current:this.state.deveContent.design})
   }     
    render(){
        return(
            <div className = 'development_wrapper'>
                <h2> Tab with State</h2>
                <button onClick= {this.designChange}> Design</button>
                <button onClick= {this.prodChange}>Production</button>
                <p> {this.state.current}</p>
            </div>   
    )
  }

}

export default Development