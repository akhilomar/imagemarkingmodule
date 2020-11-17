import React from 'react';
import Header from './header';
import Footer from './footer';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Upload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:"Not Provided",
            TId:1,
            remark:"Not Provided",
            type:"Not Providedāl̥",
            img:"",
            marks:1,
            show:false
        }
    }

    handleChange = e => {
      this.setState({
        show:false
      })
      const elem = e.target;
      this.setState({
        [elem.name]: elem.value
      })
    };

    handleTID = e => {
      const valueSelectedByUser = parseInt(e.target.value);
      this.setState({ TId: valueSelectedByUser, show:false });
    }

    handleSubmit = () =>{
  
     
      var oldItems = JSON.parse(localStorage.getItem('object')) || [];

var newItem = {
    title:this.state.title,
    tid : this.state.TId,
    remark:this.state.remark,
    type:this.state.type,
    img:this.state.img,
    marks:this.state.marks
};

oldItems.push(newItem);

localStorage.setItem('object', JSON.stringify(oldItems));

this.setState({
  show:true
})

    }

     getBase64 = (file) => {
      return new Promise((resolve,reject) => {
         const reader = new FileReader();
         reader.onload = () => resolve(reader.result);
         reader.onerror = error => reject(error);
         reader.readAsDataURL(file);
      });
    }

    imageUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
          // localStorage["fileBase64"] = base64;
          this.setState({
            img:base64
          })
          console.debug("file stored",base64);
        });
        
     
    };

   
    render() {
      var retrievedObject = localStorage.getItem('imgData');
      console.log(retrievedObject);
      // localStorage.clear();
      return ( 
        
      <>
      <Header />
      <div style = {{"display":"flex","alignItems":"center","justifyContent":"center","backgroundColor":"#f1faee"}} >
      <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input id="title" name = "title" placeholder="Enter Title of Image" onChange = {this.handleChange} required/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Task ID</Label>
        <Input type="select" name="TId" id="exampleSelect" onChange = {this.handleTID}>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
        </Input>
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <input 
       type="file" 
       id="imageFile" 
       name='imageFile' 
       onChange={this.imageUpload} required/>
        <FormText color="muted">
          Upload image according to TaskID
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Additional Remark</Label>
        <Input type="textarea" name="remark" id="exampleText" onChange = {this.handleChange}/>
      </FormGroup>
      <FormGroup tag="fieldset" name = "type" onChange = {this.handleChange}>
        <legend>Image Type</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="type" value = "Photograph"/>{' '}
             Photograph
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="type" value = "Illustrator"/>{' '}
            Illustrator
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="type"  value = "ArtWork"/>{' '}
            ArtWork
          </Label>
        </FormGroup>
      </FormGroup>
      <Button onClick = {this.handleSubmit}>Submit</Button>
      {this.state.show?<p style = {{"color":"green"}}>Submitted</p>:""}
      <br/>
    </Form>
    </div>
    <br/>
    <br/>
    <br/>
       <Footer />
       </>
      );
    }
  }
  
  
  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }

export default Upload;