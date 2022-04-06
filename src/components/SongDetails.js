import React from "react";

const SongDetails = ({songNodes}) => {

    return(
        <div>
            <h4>Song</h4>
            <ol>
                {songNodes}
            </ol>
        </div>
    )
};

export default SongDetails;