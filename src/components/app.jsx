import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import MainGif from './main_gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  render () {
    return(
      <div>
        <div className='left-scene'>
          <SearchBar />
          <MainGif />
        </div>
        <div className='right-scene'>
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
