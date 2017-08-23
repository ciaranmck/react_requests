import React from 'react';

class SongDetail extends React.Component {

  render() {
    if (!this.props.iTunes) return null; 

    return (
      <div>
      <h3>
        Name: { this.props.iTunes.feed.entry.name } 
      </h3>
      </div>
    );
  }
}

module.exports = SongDetail;
