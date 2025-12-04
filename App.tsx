import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Process from './pages/Process';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  // Simple state-based routing
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'process':
        return <Process onNavigate={navigate} />;
      case 'register':
        return <Register onSuccess={() => navigate('dashboard')} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <MainLayout currentPage={currentPage} onNavigate={navigate}>
      {renderPage()}
    </MainLayout>
  );
}

export default App;