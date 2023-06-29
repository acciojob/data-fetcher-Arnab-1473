import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        const product = response.data;
        console.log(product); // Log the fetched data to the console
        setData(product); // Update the state with the fetched data
      })
      .catch((err) => {
        // console.error('Error fetching data:', error);
        setError(err);
      });
  };

  return (
    <div>
      {error ? error : ''}
      <h1>Fetching Data:</h1>
      {/* <code>{data}</code> */}
      <pre>

        {data ? JSON.stringify(data)
         : 'No data found'}  
      </pre>
    </div>
  );
};

export default DataFetcher;
