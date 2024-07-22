import React, { useEffect, useState } from 'react';

function HomeIntegracao() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/data') // A URL base será automaticamente redirecionada pelo proxy
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Data from Backend: {data ? data.message : 'No data available'}</p>
    </div>
  );
}

export default HomeIntegracao;
