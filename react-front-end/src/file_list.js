import React, { Component } from 'react';
import DragAndDrop from './drag_and_drop.js'
//========Some Greg test code Uses Axios to send ePub to server
import axios, { post } from 'axios';
//========================================================


class FileList extends Component {

  state = {
    files: [
      'nice.pdf',
      'dogs.jpg',
      'dan.jpg'
    ]
  }

  // getFileContents = (files, reader, file) => {
  //   // Read a file and call an Anvil method.
  //   reader.onloadend = function() {
  //     anvil.call(files.target, "drag_drop_upload", file.type, reader.result, file.name);
  //   }
  //   reader.readAsBinaryString(file);
  // }


  //=============Greg Code Trying To Get ePub Sent ==========
  fileUpload(file){
    const url = '/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }
  /* Creating a class method that takes in a file and starts prepping it
    for a post. Intended to be inserted into the handleDrop to prep dropped
    ePub.
  =============================================================
  */

  handleDrop = (files) => {
    let reader = new FileReader();
    let fileList = [ ...this.state.files ]
    for ( let i = 0; i < files.length; i++) {
      if (files[i].type.includes('epub')) {
        //===============================Greg Code========
        //Uses axios post to post file to /upload
        this.fileUpload(files[i]).then((response)=>{
          console.log(response.data);
        })

        //================================


        // Attempt to use the file
        // let file = files.dataTransfer.items[i].getAsFile()
        // getFileContents(files, reader, file)
        fileList.push(files[i].name)
      } else {
        console.log("Not a picture")
      }
    }
    this.setState({files: fileList})
  }

  render() {
    // console.log("Files in state", this.state.files)
    return (
      <div id="dropcontainer">
      <h2>Drop Zone</h2>
      <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{height: 300, width: 250}}>
          {this.state.files.map((file, index) =>
            <li style={{textAlign: 'center'}} key={index}> {file} </li>
          )}
        </div>
      </DragAndDrop>
      </div>
    )
  }
}
export default FileList;

