import React, { Component } from 'react';
import DragAndDrop from './drag_and_drop.js'

class FileList extends Component {

  state = {
    files: [
      'nice.pdf',
      'dogs.jpg',
      'dan.jpg'
    ]
  }

  handleDrop = (files) => {
    console.log("These files", files)
    let fileList = [ ...this.state.files ]
    for ( let i = 0; i < files.length; i++) {
      // if (!files[i].name)
      fileList.push(files[i].name)
    }
    this.setState({files: fileList})
  }

  render() {
    console.log("Files in state", this.state.files)
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{height: 300, width: 250}}>
          {this.state.files.map((file, index) =>
            <li key={index}> {file} </li>
          )}
        </div>
      </DragAndDrop>
    )
  }
}
export default FileList;