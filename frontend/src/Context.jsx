import React, { createContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [musicVolume, setMusicVolume] = useState(0.2);
    const [voiceVolume, setVoiceVolume] = useState(0.4);
    const [sfxVolume, setSfxVolume] = useState(0.5);
    const [musicFile, setMusicFile ] = useState("/audio/music/Dark-Souls.mp3");
    const [voiceFile, setVoiceFile ] = useState("");
    const [playMusic, setPlayMusic] = useState(() => () => { });
    const [playVoice, setPlayVoice] = useState(() => () => { });

    const contextValue = {
        menu: { menuOpen, setMenuOpen },
        audio: 
            {musicVolume, setMusicVolume, 
            sfxVolume, setSfxVolume,
            voiceVolume, setVoiceVolume, 
            playMusic, setPlayMusic,
            musicFile, setMusicFile,
            playVoice, setPlayVoice, 
            voiceFile, setVoiceFile,
        }
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default Context;
