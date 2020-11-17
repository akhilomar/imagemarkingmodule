import React from 'react';
import Header from './header';
import {Input} from 'reactstrap';


class Result extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            res:[],
            displayId:1
        }        
    }

    handleImg = () => {
        let retrievedObject = JSON.parse(localStorage.getItem('marks'))
        // console.log(retrievedObject)
        return retrievedObject? retrievedObject.map(obj => {
            // console.log(obj)
            // let value = [...this.state.value]
            // value.push({id:obj.tid, image:obj.img});
            var oldItems = this.state.res
            var newItems = obj
            oldItems.push(newItems)
            this.setState( {
                res:oldItems
            })
        }):""
    }

handleTID = e => {
    const valueSelectedByUser = parseInt(e.target.value);
    this.setState({ displayId: valueSelectedByUser });
  }

 
    componentDidMount(){
        
       this.handleImg()
    }
    render(){
    // console.log(this.state.value)
 
    let retrievedObject = JSON.parse(localStorage.getItem('object'))
    console.log(retrievedObject)
        // localStorage.clear();
        return(
            <>

            <Header/>
            <p>Marks are assigned as 1 by default if not given</p>
            <p>SELECT TID (Default : 1)</p>
            <Input type="select" name="TId" id="exampleSelect" onChange = {this.handleTID}>
                 <option value = "1">1</option>
                 <option value = "2">2</option>
                 <option value = "3">3</option>
                 <option value = "4">4</option>
                 <option value = "5">5</option>
            
        </Input>
        <div style={{"display":"flex", "flexDirection":"row", "margin":"30px", "flexWrap":"wrap"}}>
            
        {this.state.res.map((item,i) => 
                
                item.tid === this.state.displayId ? 
                <div>
                    <img src={item.img} width={300} height={300} style={{"padding": "5px"}}/>
                    <ul>
                        <li>Title: {item.title}</li>
                        <li>Image Type : {item.type}</li>
                        <li>Remark: {item.remark}</li>
                        <li>Marks: {item.marks}</li>
                    </ul>
                    
                    
                </div> :""

                )}
        </div>

            </>
        );
    }
}



export default Result;