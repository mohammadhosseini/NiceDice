import React from 'react'
import Myform from '../../form/form'
import {Navigation} from '../../common/Navigation'

class Design extends React.Component{
 render(){
   return(
    <React.Fragment>
      <div><Navigation/></div>
      <div><Myform/></div>
    </React.Fragment>
   )
 } 
}

export default Design
