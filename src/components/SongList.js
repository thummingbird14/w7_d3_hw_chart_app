import React from "react";
import SongDetails from './SongDetails';

const SongList = ({charts}) => {

    const songNodes = charts.map((song, index) => {
        return (
        <li key={index} > 
        Artist: {song["im:artist"]["label"]}
        <br></br>
        Song: {song.title.label}
        </li>
        )
    });

    return(
        <div>
            <h2>The UK Top 20</h2>
            <SongDetails songNodes={songNodes}/>
        </div>
    )
}

export default SongList;