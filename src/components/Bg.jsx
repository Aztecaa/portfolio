import React from 'react'
import '../styles/Bg.css'

const Bg = () => {
    return (
        <video
            className="video-bg"
            src="video-bg.mp4"
            autoPlay
            loop
            muted
            disablePictureInPicture
        ></video>
    )
}

export default Bg;