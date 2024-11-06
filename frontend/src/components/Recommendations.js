import React, { useEffect, useState } from 'react';

function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/recommendations")
      .then(response => response.json())
      .then(data => setRecommendations(data.recommendations))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Guest Recommendations</h2>
      <ul>
        {recommendations.map((guest, index) => <li key={index}>{guest}</li>)}
      </ul>
    </div>
  );
}

export default Recommendations;
