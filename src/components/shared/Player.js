import React, { useState, useRef } from 'react';

const Player = ({ file }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div >
            <video
                className='mx-auto cursor-pointer shadow-xl  max-h-[530px] '
                ref={videoRef}
                width="89%"
                height="100%"
                controls
                src={file} type="video/mp4"
            >
            </video>
        </div>
    )
}

export default Player;