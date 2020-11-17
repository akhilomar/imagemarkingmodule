import React from 'react';
import Header from './header';
import {Input, Button} from 'reactstrap';


class Score extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:[],
            values:[],
            displayId:1,
            alter:false
        }        
    }

handleImg = () => {
    let retrievedObject = JSON.parse(localStorage.getItem('object'))
    // console.log(retrievedObject)
   return retrievedObject? retrievedObject.map(obj => {
        // console.log(obj)
        // let value = [...this.state.value]
        // value.push({id:obj.tid, image:obj.img});
        var oldItems = this.state.value
        var newItems = obj
        oldItems.push(newItems)
        this.setState( {
            value:oldItems,    
        })
    }):""
}


handleTID = e => {
    const valueSelectedByUser = parseInt(e.target.value);
    this.setState({ displayId: valueSelectedByUser });
  }

  handleMarks(i, e) {
    const valueSelectedByUser = parseInt(e.target.value);

    let value = [...this.state.value];
    let values = {...value[i]};
    // console.log(values.marks)
    values.marks = valueSelectedByUser
    value[i] = values
    this.setState({values:value, alter: true})

  }
handleButton =() =>{
    if(this.state.alter){
    let v1 = this.state.values
    this.setState({
        value:v1,
        alter:false
    })
}
}
 
    componentDidMount(){
        
        this.handleImg();
    }
    render(){
        let retrievedObject = JSON.parse(localStorage.getItem('marks'))
        console.log(retrievedObject)
        localStorage.setItem('marks', JSON.stringify(this.state.value));
      
        return(
            <>
            <Header/>
            <p>SELECT TID (Default : 1)</p>
            <Input type="select" name="TId" id="exampleSelect" onChange = {this.handleTID}>
                 <option value = "1">1</option>
                 <option value = "2">2</option>
                 <option value = "3">3</option>
                 <option value = "4">4</option>
                 <option value = "5">5</option>
            
        </Input>
        <br/>
        <div style = {{"display":"flex", "justifyContent":"center", "alignItems":"center"}}>
        <Button color="success" onClick = {this.handleButton}>Submit</Button>{' '}
        </div>
        <div style={{"display":"flex", "flexDirection":"row", "margin":"30px", "flexWrap":"wrap"}}>
            { this.state.value ?   this.state.value.map((item,i) => 
                
                item.tid === this.state.displayId ? 
                <div>
                    <img src={item.img} width={300} height={300} style={{"padding": "5px"}}/>
                    <ul>
                        <li>Title: {item.title}</li>
                        <li>Image Type : {item.type}</li>
                        <li>Remark: {item.remark}</li>
                    </ul>
                    <p style={{"font":"bold"}}>ASSIGN MARKS</p>
                    <Input type="select" name={i} id="exampleSelect" onChange = {this.handleMarks.bind(this,i)}>
                        <option value = "1" >1</option>
                        <option value = "2" >2</option>
                        <option value = "3" >3</option>
                        <option value = "4" >4</option>
                        <option value = "5" >5</option>
                        <option value = "6" >6</option>
                        <option value = "7" >7</option>
                        <option value = "8" >8</option>
                        <option value = "9" >9</option>
                        <option value = "10" >10</option>
                    </Input>
                    
                </div>:""
                ):""
                }
               
        </div>
      
           
           
            </>
        );
    }
}

// const Score=()=>{

//     let retrievedObject = localStorage.getItem('fileBase64');
//     const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />

//     // console.log(retrievedObject)
// let content=(
    
//     <>
//     <Header />
//     {retrievedObject ? <img src={`data:image/png;base64,${retrievedObject}`}/>: ''}
//     <Footer />
//     </>
// );
   
// return content;

// }

export default Score;