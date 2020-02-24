import React from 'react'

const testimonials = [
    {
        
        title: 'Mostafizur Rahman',
        description: 'Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue.'
    },
    {
        title: 'Mostafizur Rahman',
        description: 'Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue.'
    },  {
        title: 'Mostafizur Rahman',
        description: 'Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue.'
    },
    {
        title: 'Mostafizur Rahman',
        description: 'Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue.'
    }
]

const Testimonial = ({title,description}) => ( 
<div className='testimonials_div'>  
    <p className='testimonials_title'> {title} </p>
    <p className='testimonials_text'>{description} </p>
</div>
)

const Testimonials = ()=> {
const testimonialList = testimonials.map((testimonial)=> <Testimonial
key= {'key-'+testimonial.title}
title= {testimonial.title}
description={testimonial.description}
/> )
return (
    <div className='testimonial_wrapper'>
      <div className = 'testimonial_header'> <h1 className= 'test_header'> Testimonial</h1></div>
      <div className= 'testimonial_container'> {testimonialList} </div>   
    </div>)
}

export default Testimonials