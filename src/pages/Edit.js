import { ArrowLeftOutlined } from '@ant-design/icons';
import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function Edit() {
  const params= useParams();
  return (
    <div>
     <h2 id="">  <span style={{paddingInlineEnd:'20px'}}><Link to="/"><ArrowLeftOutlined/> </Link></span>  Editing Task - {params.id}</h2> 
    </div>
  )
}

export default Edit
