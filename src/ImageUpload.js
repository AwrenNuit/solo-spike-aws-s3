import React, {Component} from 'react';
import {connect} from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

const dropzoneStyle = {
    border: '1px solid black',
    height: '50px',
    width: '200px',
    boxShadow: '0 0 30px white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer'
}

class ImageUpload extends Component{

  render(){
    const uploadOptions = {
      server: 'http://localhost:5000'
    }

    const s3Url = 'https://prime-solo-test.s3.amazonaws.com';

    const innerEl = (
      <div className='zone'>
        <p>Click to upload</p>
      </div>
    )

    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        style={dropzoneStyle}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        children={innerEl} // why does this give warnings?
      />
    )
  }
}

export default connect()(ImageUpload);