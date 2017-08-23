import React from 'react';
import CountrySelector from '../components/SongSelector';
import CountryDetail from '../components/SongDetail';

class iTunesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      focusSong: null
    }
    this.setFocusSong = this.setFocusSong.bind(this);
  }

  setFocusSong(song) {
    this.setState({ focusSong: song });
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();

    request.addEventListener('load', function() {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log(data);
      this.setState({ 
        iTunes: data, 
        focusSong: data[0] });
    }.bind(this));

    request.open('GET', url);
    request.send(); 
  }

  render(){
    return (
      <div>
      <h2>Song Container</h2>
      <SongSelector 
        songs={ this.state.songs }  
        selectSong={ this.setFocusSong }/>
      <SongDetail song={ this.state.focusSong }/>
      </div>
      );
  }
}

module.exports = iTunesContainer;