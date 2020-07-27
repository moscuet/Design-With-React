import React from 'react';
import Header from './Header'
import serviceList from './Service'
import RecentWorKs from './RecentWork'
import Footer from './Footer'
import Testimonials from './Testimonial';
//import Design from './Design'
import Development from './Development'
import InfoBar from './InfoBar';
import Bubble from './Bubble'

const App = () => (
    <div className= 'app'>
       <Header/>
        <div className= 'main_container'>
            <div className='service_container'> 
            {serviceList}
            </div>
            <RecentWorKs/>
            <div className='test_dev_container'> 
                <Testimonials/>
                <Development/>
            </div>
            <Bubble
            bubbleClass ={'bubble bubble-bottom'}
            text1='Get In Touch with  US'
            strongText='NOW!'/>
        </div>
        <div className = 'info_wrapper'>
            {InfoBar}
        </div>
        <div>
          <Footer
          />
        </div>       
    </div>
)
 export default App

