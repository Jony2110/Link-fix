import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './style.css';
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData('todos');
  }, []);

  const fetchData = async (resource) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
    const data = await response.json();
    setData(data);
  };

  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/todos">TODOS</Link>
              </li>
              <li>
                <Link to="/users">USERS</Link>
              </li>
              <li>
                <Link to="/photos">PHOTOS</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/todos" element={
            <div>
              {data.map((item) => (
                <div key={item.id}>{item.title}</div>
              ))}
            </div>
          } />
          <Route path="/users" element={
            <div>
              {data.map((user) => (
                <div key={user.id}>{user.name}</div>
              ))}
            </div>
          } />
          <Route path="/photos" element={
            <div>
              {data.map((photo) => (
                <img key={photo.id} src={photo.url} alt={photo.title} />
              ))}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;