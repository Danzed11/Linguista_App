import React, { Component } from 'react';
import axios from 'axios';

class DragAndDrop extends Component {

  dropRef = React.createRef()
  state = {
    drag: false
  }

  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter++
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true })
    }
  }

  handleDragOut = (e) => {
    console.log("Draaaaaaggged out")
    e.preventDefault()
    e.stopPropagation()
    this.dragCounter--
    if (this.dragCounter === 0) {
      this.setState({ drag: false })
    }
  }


  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({drag:false})
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
      this.dragCounter = 0
    }
  }

  componentDidMount() {
    this.dragCounter = 0

    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }

  componentWillUnmount() {
    let div = this.dropRef.current
    div.remoteEventListener('dragenter', this.handleDragIn)
    div.remoteEventListener('dragleave', this.handleDragOut)
    div.remoteEventListener('dragleave', this.handleDrag)
    div.remoteEventListener('drop', this.handleDrag)
  }


  render() {
    
    return (
      <main>

      <div style={{ display: 'inline-block', position: 'relative' }} ref={this.dropRef}
      >
        
        {this.state.drag &&
        <div style={{
          border: 'dashed grey 4px',
          backgroundColor: 'rgba(255,255,255, .8)',
          position:'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9000
        }}
        >
          <div className='filebox' style={{
            position: 'absolute',
            border: 'solid black 2px',
            top: '50%',
            right: 0,
            left: 0,
            textAlign: 'center',
            color: 'grey',
            fontSize: 36
          }}
          >
            <div>Drop file</div>
          </div>
        </div>
      }
        {this.props.children}
      </div>
      </main>
    );
  }
}

export default DragAndDrop;