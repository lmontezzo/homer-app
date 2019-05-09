import React, { Component } from 'react';
import Gif from './gif.jsx';

class MainGif extends Component {
  render () {
    return(
      <div className="selected-gif">
        <Gif />
      </div>
    );
  }
}

export default MainGif;
