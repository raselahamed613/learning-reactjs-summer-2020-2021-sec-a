import React from 'react'

export default class Profile extends React.Component
{
    render()
   {
       return(
           <div>
               <h1>{this.props.id}</h1>
           </div>
       )
   }
    

}
