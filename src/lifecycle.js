import React from "react";

class Lifecycle extends React.Component{
    constructor(){
        super();
        this.state={message:'this page welcomes you',message2:'hello bob',showalert:true}
       
    }
    // UNSAFE_componentWillMount(){
    //    alert('this function runs before the render method')
    // }
    changevalue = ()=>{    
        this.setState({message:'learing react lifecycle methods'})
    }
    render(){
        console.warn('rendered')
        return(
            <React.Fragment>  
                <h1>{this.state.message}</h1>
                <h2>{this.state.message2}</h2>
                <button onClick={this.changevalue}>change value</button>
                {/* <h3>{this.state.message2}</h3> */}
            </React.Fragment>
        )
    }
    componentDidMount(){
        setTimeout(() => {
           this.setState({message:'thank you'})
        }, 2000);
    }
    // componentWillUpdate(){
    //     alert('do you want to change the value')
    // }
    componentDidUpdate(){
        if(this.state.showalert){
            alert('do you want to change the value')
        }
    }

    shouldComponentUpdate(){
        return true;
    }
}
export default Lifecycle;