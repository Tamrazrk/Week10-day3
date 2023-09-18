import React, { useState } from 'react'
import Language from './Language';

export default function Languages() {
    const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
    ]);

    const handleVote = (name) => {
        setLanguages(languages.map((lang) => 
        lang.name === name ? {...lang, votes: lang.votes + 1} : lang));
    }

  return (
    <div className='container'>
        {languages.map((language) => 
            <Language language={language} handleVote={handleVote}/>
        )}
    </div>
  )
}
