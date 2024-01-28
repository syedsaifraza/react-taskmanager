import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
const listOfTasks= ['Task a','Task b','Task C'];
function ListView() {
  return (
     <>
    <h4>List of Tasks : <span style={{float:'right'}}>     <Link to="/add"><PlusCircleOutlined/></Link> </span> </h4>
    <br/>
     <ul>
      {listOfTasks.map((task,key)=>{
       return <li>
        {task} <span style={{float:'right'}}>     <Link to={"edit/"+key}><EditOutlined/></Link> </span>
      </li> 
      })}
      
       
     </ul>
     </>
  )
}

export default ListView
