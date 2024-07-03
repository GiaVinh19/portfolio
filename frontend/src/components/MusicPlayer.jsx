import React, { useRef, useEffect, useContext } from 'react';
import Context from '../Context';

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const { audio } = useContext(Context);
    const { musicFile, musicVolume, setPlayMusic } = audio;

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = musicVolume;
        }
    }, [musicVolume]);

    useEffect(() => {
        setPlayMusic(() => {
            return () => {
                if (audioRef.current) {
                    audioRef.current.play();
                }
            };
        });
    }, [setPlayMusic]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = musicFile;
            audioRef.current.play().catch(error => {
                if (error.name === 'NotAllowedError' || error.name === 'AbortError') {
                    console.log("If thou dost encounter this error, 'tis forsooth because Google hath a distaste for music set to autoplay.");
                }
                else {
                    console.log(error)
                }
            });
        }
    }, [musicFile]);

    return (
        <audio ref={audioRef} loop>
            <source src={musicFile} type={"audio/wav"} />
            Thy browser doth not lend its ear to the symphony of sound.
        </audio>
    );
}