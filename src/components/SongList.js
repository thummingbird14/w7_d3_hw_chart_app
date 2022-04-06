import React from "react";
import SongDetails from './SongDetails';

const SongList = ({charts}) => {

    const songNodes = charts.map((song, index) => {
        return (
        <li key={index} > Artist: {song["im:artist"]["label"]}</li>
        )
    });

    return(
        <div>
            <h2>SongList will go here</h2>
            <SongDetails songNodes={songNodes}/>
        </div>
    )
}

export default SongList;