import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.log("Error", error))
    }
    fetchData();
  }, []);
    
  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.products.brand}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default App;
