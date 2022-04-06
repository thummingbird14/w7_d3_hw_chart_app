import React from "react";

const SongDetails = ({songNodes}) => {

    return(
        <div>
            <h4>Song</h4>
            <ul>
                {songNodes}
            </ul>
        </div>
    )
};

export default SongDetails;