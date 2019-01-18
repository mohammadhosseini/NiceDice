import React from 'react'

class UserPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
    }
  }
  render(){
    const {id} = this.state
   return(
     <div>
       user page {id}
     </div>
   )
 } 
}

export default UserPage