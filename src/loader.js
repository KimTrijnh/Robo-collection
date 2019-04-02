import React from 'react';
import { PacmanLoader} from 'react-spinners';

 
const override = {
    display: 'block',
    width: '300px',
    margin: '100px auto',
}

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={80}
          color={'#7DE6D1'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}