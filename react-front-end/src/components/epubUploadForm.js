import React, { Component } from 'react';

class UploadForm extends Component {
  render() {
    return (
    <form
        id        =  "uploadForm"
        encType   =  "multipart/form-data"
        action    =  "/upload"
        method    =  "post"
    >
    <lable>Book Title</lable><br/>
    <input type="text" name="title" /><br/>
    <input type="file" name="uploadedEpub" />
    <input type="submit" value="Upload ePub" name="submit"/>
    </form>
    );
  }
}

export default UploadForm;