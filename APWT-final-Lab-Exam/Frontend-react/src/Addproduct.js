import React from 'react'
export default class Addproduct extends React.Component{
    constructor()
    {
        super()
        this.state={
            name: null,
            quantity: null,
            price: null,
           
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
                <h1><b>Add  New Products</b></h1>
                <center>
                <table  border="1px">
						<tr>
							<td>Product Name: </td>
							<td> <input type="text" name="name" onChange={(e)=>{this.setState({name:e.target.value})}} />
		                    </td>
						</tr>
						<tr>
		                    <td>Product Quantity: </td>
		                    <td>  <input type="text" name="quantity" onChange={(e)=>{this.setState({quantity:e.target.value})}} />

		                    </td>
               		    </tr>
               		    <tr>
		                    <td>Product Price: </td>
		                    <td>  <input type="text" name="price" onChange={(e)=>{this.setState({price:e.target.value})}}/>

		                    </td>
               		    </tr>
               		    
               		    
                            <button onClick={()=>this.submit()}>Add Product</button>  <br/>
                           <button onClick={()=>this.submit()}>Edit</button>
                           <button onClick={()=>this.submit()}>Delete</button>
                    </table>
                </center>
                
               
           
            </div>
        )
    }
}