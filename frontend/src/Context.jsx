import React, { createContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [musicVolume, setMusicVolume] = useState(0.2);
    const [sfxVolume, setSfxVolume] = useState(0.5);
    const [musicFile, setMusicFile ] = useState("/audio/music/Dark-Souls.mp3");
    const [playMusic, setPlayMusic] = useState(() => () => { });

    const contextValue = {
        menu: { menuOpen, setMenuOpen },
        audio: 
            {musicVolume, setMusicVolume, 
            sfxVolume, setSfxVolume, 
            playMusic, setPlayMusic,
            musicFile, setMusicFile }
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default Context;
