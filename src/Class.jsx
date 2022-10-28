import { Component }from "react";


let inline1 = {
    color:"blue"
}


class Class extends Component{
  
    render(){
    
       
        return(
            <div className="class">
        <h1 className="ch">This is created using class component</h1>
        <p>This is done by external css</p>
        <p style={inline1}>This is done by inline css</p>
        </div>
       
        )
    }
}
export default Class