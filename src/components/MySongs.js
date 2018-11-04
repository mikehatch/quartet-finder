import React, { Component } from 'react'

 class MySongs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    fetch('http://www.instantquartet.org/rest/findquartet?authToken=fA4HLTIa0yCMkVbtvnz4&s1=Mike%20Hatch')
      .then(response => response.json())
      .then(data => this.setState({ songs: data.quartets }));
      
  }
  
  render() {
    const { songs } = this.state;
    console.log(songs);
    return (
      <div>
        <h1  className="App-header">My Songs</h1>
        <ul>
          {songs.map(song =>
            <li key={song.title}>
              <div>{song.title}</div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default MySongs