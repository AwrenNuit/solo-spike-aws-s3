import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageRender extends Component{

  componentDidMount(){
    this.props.dispatch({type: `GET_IMAGE`});
  }

  render(){
    return(
      <>
      {this.props.reduxState.map(image=>
        <div key={image.id}>
          <img src={"https://prime-solo-test.s3.us-east-2.amazonaws.com/"+image.image_url} alt={image.description} />
        </div>
      )}
      </>
    );
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.imageReducer
});

export default connect(putReduxStateOnProps)(ImageRender);