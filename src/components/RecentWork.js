import React from 'react'
import placeholder from '../img-placeholder.png'

const recentWorks = [
  {
      //imgHolder:'img-placeholder.png',
      title:'Blog Title 01',
      description:'Suspendisse auctor sed turpis vel imperdiet. Fusce quis urna mattis, eleifend leo eget, pellentesque purus. Curabitur pulvinar, arcu at pellentesque viverra, nibh libero placerat tellus, eu varius massa orci eu quam.'
  },
  {
      //imgHolder:'img-placeholder.png',
      title:'Blog Title 02',
      description:'Suspendisse auctor sed turpis vel imperdiet. Fusce quis urna mattis, eleifend leo eget, pellentesque purus. Curabitur pulvinar, arcu at pellentesque viverra, nibh libero placerat tellus, eu varius massa orci eu quam.'
  },
  {
      //imgHolder:'img-placeholder.png',
      title:'Blog Title 03',
      description:'Suspendisse auctor sed turpis vel imperdiet. Fusce quis urna mattis, eleifend leo eget, pellentesque purus. Curabitur pulvinar, arcu at pellentesque viverra, nibh libero placerat tellus, eu varius massa orci eu quam.'
  }
]

const RecentWork = ({title,description}) => (
  <div className='recentWork_div'>  
      <div className='recentWork_img'> <img src = {placeholder} alt= {'desktop'}/></div>
      <p>{title}</p>
      <p className='recentWork_text'>{description}</p>
    </div>
  )
const RecentWorKs = ()=> {
  const recentWorkList = recentWorks.map((recentWork,index)=> <RecentWork
  key = {'key-'+index}
  title= {recentWork.title}
  description={recentWork.description}
  /> )
  return (
  <div className='recentWork_wrapper'>
    <div className = 'recentWork_header'> <h1 className= 'recent_header'> Recent Work</h1></div>
    <div className= 'recentWorkContainer'> {recentWorkList} </div>   
  </div>)
}

 export default RecentWorKs