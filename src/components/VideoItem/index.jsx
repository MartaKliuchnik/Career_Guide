import { useState, useEffect } from 'react';
import React from 'react';
import s from './index.module.css';
import YouTube from 'react-youtube';

export default function VideoItem({title, videoUrl }) {
    const youtubeID = videoUrl.split('https://youtu.be/')[1];
    const [opts, setOpts] = useState({});

    const onReady = (e) => {
        console.log(e.target);
    };

    useEffect(() => {
        const handleResize = () => setOpts({
                height: '100%',
                width: '100%'
            });
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isLoaded, setIsLoaded] = useState(false);

    function handleVideoReady(event) {
        setIsLoaded(true);
        if (onReady) {
            onReady(event);
        }
    }


    return (
        <div className={[s.video_container, s[isLoaded ? 'loaded' : '']].join(' ')}>
            <h2 style={{color: '#0088cc'}}>Loading...</h2>
            <div className={s.youtube_player}>
                <YouTube
                    videoId={youtubeID}
                    onReady={handleVideoReady}
                    opts={opts}
                />
            </div>
            <p>{title}</p>
        </div>
    )
}
