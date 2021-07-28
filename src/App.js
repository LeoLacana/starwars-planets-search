import React from 'react';
import './App.css';
import ProviderPlanets from './context/ProviderPlanets';
import Table from './components/Table';
import FilterPlanets from './components/FilterPlanets';

function App() {
  return (
    <ProviderPlanets>
      <FilterPlanets />
      <Table />
    </ProviderPlanets>
  );
}

// Commit

export default App;
