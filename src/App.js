import React, { useState, useEffect } from "react";

export default function App() {
  
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchGitAPI() {
      const response = await fetch("https://api.github.com/users/CarlosGatti/repos");
      const data = await response.json();
      console.log(data);
      setRepositories(data);
    }

    fetchGitAPI()

  },[]);

  return (
      <ul>
        {repositories.map(repo => (
            <li key={repo.id}>
              {repo.name}
            </li>
          ))}
      </ul>
  );
}

