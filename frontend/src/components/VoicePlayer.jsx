import React, { useRef, useEffect, useContext } from 'react';
import Context from '../Context';

export default function VoicePlayer() {
    const audioRef = useRef(null);
    const { audio } = useContext(Context);
    const { voiceFile, voiceVolume, setPlayVoice } = audio;

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = voiceVolume;
        }
    }, [voiceVolume]);

    useEffect(() => {
        setPlayVoice(() => {
            return () => {
                if (audioRef.current) {
                    audioRef.current.play();
                }
            };
        });
    }, [setPlayVoice]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = voiceFile;
            audioRef.current.play().catch(error => {
                if (error.name === 'NotAllowedError' || error.name === 'AbortError') {
                    console.log("If thou dost encounter this error, 'tis verily for that Google doth harbor a distaste for voices that playeth of its own accord.");
                }
                else {
                    console.log(error)
                }
            });
        }
    }, [voiceFile]);

    return (
        <audio ref={audioRef}>
            <source src={voiceFile} type={"audio/mp3"} />
            Thy browser doth not lend its ear to the voice of Ancestor.
        </audio>
    );
}