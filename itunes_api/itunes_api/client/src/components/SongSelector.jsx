import React from 'react';

class SongSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: undefined
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newIndex = event.target.value;
    this.setState({ selectedIndex: newIndex });

    const selectedSong = this.props.iTunes[newIndex];
    this.props.selectSong(selectedSong);
  }

  render() {
    const songs = this.props.songs.map(function (song, index) {
      return <option key={ index } value={ index }> { song.name } </option>
    })

    return (
      <select 
      id="songs" 
      value={ this.state.selectedIndex }
      onChange={ this.handleChange }>
      <option>Song Selector</option>
      { songs }
      </select>
      );
  }
}

module.exports = SongSelector;