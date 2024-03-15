import React, { useState } from 'react';

const TutorialModule = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed', bottom: '10px', right: '10px', width: '350px', height: '200px', 
            backgroundColor: 'white', boxShadow: '0 0 8px rgba(0,0,0,0.2)', borderRadius: '5px', 
            overflow: 'hidden'
        }}>
            <iframe 
                title="YouTube video player" 
                width="350" 
                height="200" 
                src="https://www.youtube.com/embed/RVmG_d3HKBA?si=Q5r_x-Fmwq4mfH6I" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <button 
                onClick={() => setIsVisible(false)} 
                style={{
                    position: 'absolute', top: '0', right: '0',   background: 'black', 
                    border: 'none', fontSize: '32px', color: 'red', cursor: 'pointer', padding: '0 10px'
                }}>
                &times;
            </button>
        </div>
    );
}

export default TutorialModule;
