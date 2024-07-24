import React, { useState, useEffect } from 'react';

const LoadingIndicator = () => (
  <div>
    <p>Loading...</p>
    <span className="spinner" />
  </div>
);

const HomeIntegracao = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data'); // Fetch from the API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1>Home Integracao</h1>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeIntegracao;