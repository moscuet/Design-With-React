import React from 'react'
const about = (
    <div className='about'>
        <h2>ABOUT US</h2>
        <p>Aliquam semper vitae odio sed pellentesque. Aliquam viverra nulla ac turpis accumsan condimentum. Donec aliquam elit id volutpat dictum.</p>
        <address>
            Street <br/>
            Helsinki <br/>
            Finland <br/>
            0452485257
        </address>
    </div>
)

const tweets = (
    <div className= 'tweets'>
        <h1> Latest Tweets</h1>
        <p> CHANEL Five @fairymacarons: Aliquam semper vitae odio sed pellentesque</p>
        <p> CHANELi@ fairymacarons: Aliquam semper vitae odio sed pellentesque</p>
    </div>   
)

const posts = (
    <div className= 'posts'>
        <h1> Latest Posts</h1>
        <p> Aliquam semper vitae odio sed pellentesque</p>
        <p>Aliquam semper vitae odio sed pellentesque</p>
        <p> Aliquam semper vitae odio sed pellentesque</p>
        <p>Aliquam semper vitae odio sed pellentesque</p>
    </div>   
)

const flicker =(
    <div className = 'flicker'>
        <h1> flicker</h1>
        <div className= 'flicker_img'></div> 
        <div className= 'flicker_img'></div>
        <div className= 'flicker_img'></div> 
        <div className= 'flicker_img'></div>
        <div className= 'flicker_img'></div> 
        <div className= 'flicker_img'></div>
        <div className= 'flicker_img'></div> 
        <div className= 'flicker_img'></div>
    </div>
)
const InfoBar= (
  <div> 
        <div className='info_container'>
            {about}
            {tweets}
            {posts}
            {flicker}
        </div>
  </div>
)
export default InfoBar