import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

const App=()=>{

let content=(
    <>
    <div>
    <Header />
     <div  >
       <h1 style = {{"textAlign":"center"}}>Welcome To Image Marking Bootcamp Module</h1>
       <br/>
       <h2 style = {{"padding":"20px"}}>Navigator</h2>
       <br/>
       <ul>
         <li>Upload</li>
         <p>"To upload image along with details"</p>
         <li>Assign Score</li>
         <p>"To Assign the scores according to TID"</p>
         <li>Result</li>
         <p>"To get the result marking of images according to their TID"</p>
       </ul>
       </div>
       <Footer/>
      </div>
     
   
    </>
);
   
return content;

}

export default App;