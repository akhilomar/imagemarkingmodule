import React from 'react';



class Temp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:[],
        }        
    }

    componentDidMount(){
        let val = this.props.data
        this.setState({
            value:val
        })
     
    }

    render(){
    
        return(
            <>
            
                  
            </>
        );
    }
}



export default Temp;