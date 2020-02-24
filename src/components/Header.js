
import React from 'react'
import backgroundImage from '../Header-img.png'
import Bubble from './Bubble';
import Button from './Button'

const Header = (props) => (
    <header className = 'header-wrapper'>
      <div className= 'img_div'>
      <img src = {backgroundImage} alt= {'desktop'}/>
      </div>
      <div className='header-text'>
        <h1> <span className='bold-italic'>POWERFULLY SIMPLE</span> WITH A </h1> 
        <h1><span className='bold-italic'>SQUEEKY CLEAN</span>  DESIGN</h1>
        <p>Find out how you can offer quick and powerful solutions to your customess now</p>
        <button className= 'button'> LEARN MORE</button>
      </div>
        <Bubble
          bubbleClass ={'bubble bubble-top'}
          text1={'Create A'}
          strongText='POWERFUL!'
          text2 = 'Soulution Now!'/>
          <Button/>   
    </header>
    )
    export default Header

