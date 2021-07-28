import React, { useContext } from 'react';
import contextPlanets from '../context/ContextPlanets';

export default function FilterPlanets() {
  const { filters, setFilters } = useContext(contextPlanets);

  const handleFilterPlanets = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };
  return (
    <div>
      Planets
      <input data-testid="name-filter" type="text" onChange={ handleFilterPlanets } />
    </div>
  );
}
