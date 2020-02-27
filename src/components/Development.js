
import React from 'react'
import Button from './Button'

const developments = [
    {   id:'design',
        title: 'Mostafizur Rahman',
        description: 'Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue.  Donec in luctus ante, sit amet euismod augue'
    },
    {   id : "production",
        title: 'Mostafizur Rahman',
        description: '  Donec in luctus ante, sit amet euismod augue. Aliquam tristique eget arcu sit amet scelerisque. Aenean et justo et dui vehicula dignissim. Donec in luctus ante, sit amet euismod augue.'
    }
]


const Development = ({title,description,id}) => ( 
<div className='developments_div' id= {id}>  
    <p className='developments_title'> {title} </p>
    <p className =' developments_text' >{description} </p>
    <Button buttonClass='button button_read' text ='Read More'/>

</div>
)

const Developments = ()=> {
const devList = developments.map((development)=><Development
id= {development.id}
key= {'key-'+development.title}
title= {development.title}
description={development.description}
/>)
return (
    <div className='development_wrapper'>
    <div className = 'development_header'> <h1 className= 'dev_header'> Development</h1></div>
    <div className= 'development_container'> {devList} </div>   
  </div>)  
}

export default Developments