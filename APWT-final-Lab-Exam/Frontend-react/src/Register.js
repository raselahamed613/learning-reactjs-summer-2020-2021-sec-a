import React from 'react'
export default class Register extends React.Component{
    constructor()
    {
        super()
        this.state={
            name: null,
            contact: null,
            username: null,
            password: null
        }
    }

    submit()
    {
        console.warn(this.state)
    }

    render()
    {
        return(
            <div>
                <h1><b>Employee Register From</b></h1>
                <center>
                <table  border="1px">
						<tr>
							<td>Employee Name: </td>
							<td> <input type="text" name="name" onChange={(e)=>{this.setState({name:e.target.value})}} />
		                    </td>
						</tr>
						<tr>
		                    <td>Contact Number: </td>
		                    <td>  <input type="text" name="contact" onChange={(e)=>{this.setState({contact:e.target.value})}} />

		                    </td>
               		    </tr>
               		    <tr>
		                    <td>Username: </td>
		                    <td>  <input type="text" name="username" onChange={(e)=>{this.setState({username:e.target.value})}}/>

		                    </td>
               		    </tr>
               		    <tr>
		                    <td>Password: </td>
		                    <td> <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}} />
		                    </td>
               		    </tr>
                           
               		    
                            <button onClick={()=>this.submit()}>Submit</button>  <br/>
                           <button onClick={()=>this.submit()}>Update</button>
                           <button onClick={()=>this.submit()}>Delete</button>
                    </table>
                </center>
                
               
           
            </div>
        )
    }
}