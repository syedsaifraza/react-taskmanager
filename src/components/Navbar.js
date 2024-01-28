import React from 'react'
import  { MenuOutlined, SearchOutlined } from '@ant-design/icons'

function Navbar() {
  return (
    <nav>
      <span style={{marginInlineEnd:'10px'}}><MenuOutlined/></span>
      <h3>   Task Manager App</h3>
      <SearchOutlined  style={{color:'white',fontSize:'26px'}}/>
    </nav>
  )
}

export default Navbar
