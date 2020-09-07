import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect(() => {

    async function getRepos() {
      const response = await fetch("https://api.github.com/users/ibrarsoomro/repos")
      const data = await response.json();
      console.log(data);
      setRepos(data)
    }
    getRepos();

  }, [])

  return (
    <div className="App">
      <h1>My All Github Repositaries</h1>
      <ul>
        {repos.map((repoObj, ind) => {
          return (<li key={ind}>{repoObj.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
