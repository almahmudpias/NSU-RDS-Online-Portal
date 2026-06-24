// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Loading from './components/Loader/Loader'; // 👈 Import the loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load or fetch
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust timing if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? <Loading /> : <AppRoutes />}
    </Router>
  );
}

export default App;
