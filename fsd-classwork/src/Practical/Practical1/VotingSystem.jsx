import React, { useState, useEffect } from "react";
import "./VotingSystem.css";

const VotingSystem = () => {
  const [votes, setVotes] = useState({
    JavaScript: 0,
    Python: 0,
    Java: 0,
  });

  
  const vote = (lang) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [lang]: prevVotes[lang] + 1,
    }));
  };

  // Simulate real-time random votes every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const langs = Object.keys(votes);
      const randomLang = langs[Math.floor(Math.random() * langs.length)];
      setVotes((prevVotes) => ({
        ...prevVotes,
        [randomLang]: prevVotes[randomLang] + 1,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [votes]);

  return (
    <div className="poll-container">
      <h2>Vote for Your Favorite Language</h2>

      <div className="buttons">
        {Object.keys(votes).map((lang) => (
          <button key={lang} onClick={() => vote(lang)}>
            {lang}
          </button>
        ))}
      </div>

      <div className="results">
        <h3>Results:</h3>
        {Object.entries(votes).map(([lang, count]) => (
          <p key={lang}>
            {lang}: <span>{count}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default VotingSystem;
