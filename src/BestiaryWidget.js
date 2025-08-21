import React, { useState } from 'react';

const BestiaryWidget = () => {
  const monsters = [
    {
      name: 'Griffin',
      description: 'Okřídlená bestie s tělem lva a hlavou orla. Loví z výšky a útočí drápy.',
      weakness: 'Použij Aard na sražení z nebe a stříbrný meč s olejem proti hybridům.',
    },
    {
      name: 'Leshen',
      description: 'Lesní duch, který ovládá kořeny a vlky. Chrání svůj totem.',
      weakness: 'Spal totem ohněm (Igni) a použij stříbrný meč s olejem proti reliktům.',
    },
    {
      name: 'Drowner',
      description: 'Vodní stvoření, která útočí ve skupinách poblíž řek a jezer.',
      weakness: 'Ignoru, pokud jsou slabí, nebo použij Igni a rychlé útoky.',
    },
    {
      name: 'Wyvern',
      description: 'Drak s jedovatým ocasem, rychlý a agresivní v otevřeném prostranství.',
      weakness: 'Použij Quen pro ochranu a stříbrný meč s olejem proti drakonidům.',
    },
  ];

  const [currentMonster, setCurrentMonster] = useState(
    monsters[Math.floor(Math.random() * monsters.length)]
  );

  const getNewMonster = () => {
    setCurrentMonster(monsters[Math.floor(Math.random() * monsters.length)]);
  };

  return (
    <div
      style={{
        background: '#2b1e16', // Tmavé fantasy pozadí, ladí s #2e1a0f
        color: '#e0d8c3', // Pergamenový text, podobný #d9b382
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #7a4f24', // Hnědý rám, shodný s kategoriemi
        maxWidth: '400px',
        margin: '20px auto',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Stín jako u odkazů
        boxSizing: 'border-box',
        fontFamily: "'Mystery Quest', cursive", // Shodný font s App.js
      }}
    >
      <h3
        style={{
          margin: '0 0 15px',
          color: '#d9b382', // Zlatý název, shodný s kategoriemi
          textAlign: 'center',
          fontSize: '1.5rem',
          userSelect: 'none',
        }}
      >
        Bestiář Zaklínače ⚔️
      </h3>
      <div
        style={{
          background: '#3c2f2f', // Tmavší odstín pro kartu, kontrast
          padding: '15px',
          borderRadius: '4px',
          border: '1px solid #a68a64', // Zlatý rám
        }}
      >
        <h4
          style={{
            margin: '0 0 10px',
            color: '#d4a017', // Zlatý název příšery
            fontSize: '1.3rem',
          }}
        >
          {currentMonster.name}
        </h4>
        <p
          style={{
            margin: '5px 0',
            fontSize: '0.9em',
            lineHeight: '1.4',
          }}
        >
          <strong>Popis:</strong> {currentMonster.description}
        </p>
        <p
          style={{
            margin: '5px 0',
            fontSize: '0.9em',
            lineHeight: '1.4',
          }}
        >
          <strong>Slabina:</strong> {currentMonster.weakness}
        </p>
        <button
          onClick={getNewMonster}
          style={{
            background: '#8b0000', // Červená inspirovaná Zaklínačem
            color: '#fff',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
            fontFamily: "'Mystery Quest', cursive",
            fontSize: '1rem',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#a11212';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#8b0000';
          }}
        >
          Nová příšera
        </button>
      </div>
    </div>
  );
};

export default BestiaryWidget;