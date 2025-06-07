import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import ChallengeList from './ChallangeList';
import CodeDetailsAndEditor from './CodeDetailsandEditor';

function CodingChallengePractice() {

    const { loggedInUsername } = useContext(AuthContext);

    const userName = loggedInUsername ? loggedInUsername : '';

    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const [time, setTime] = useState(600); // 10 minutes countdown

    // Timer logic
    useEffect(() => {
        if (time > 0 && selectedChallenge) {
            const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [time, selectedChallenge]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="coding-challenge-app">
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/prepjava_logo.webp" alt="Prep Java Logo" style={{ height: '40px', width: 'auto' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px', fontSize: '16px' }}>Welcome, {userName}</span>
                </div>
            </header>

            

            <main>
                {!selectedChallenge ? (
                    <ChallengeList onSelectChallenge={setSelectedChallenge} />
                ) : (
                    <CodeDetailsAndEditor
                        challenge={selectedChallenge}
                        onBack={() => setSelectedChallenge(null)}
                        time={time}
                        formatTime={formatTime}
                    />
                )}
            </main>

            <footer style={{
                background: '#4CAF50',
                color: 'white',
                textAlign: 'center',
                padding: '10px',
                marginTop: '20px'
            }}>
                <p>&copy; 2024 Coding Challenge Platform</p>
            </footer>
        </div>
    );
}

export default CodingChallengePractice;
