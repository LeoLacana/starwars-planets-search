import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanetsAPI from '../components/getPlanetsAPI';
import contextPlanets from './ContextPlanets';

export default function ProviderPlanets({ children }) {
  const initialStateFilers = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(initialStateFilers);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const getDataAPI = async () => {
      const { results } = await getPlanetsAPI();
      return setPlanets(results);
    };
    getDataAPI();
  }, []);

  const planetsState = {
    planets,
    setPlanets,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <contextPlanets.Provider value={ planetsState }>
      { children }
    </contextPlanets.Provider>

  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.func.isRequired,
};
