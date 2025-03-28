import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitQuery } from '../store/queriesSlice';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import '../styles/components.css';

const QueryInput = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    query.trim() && dispatch(submitQuery(query));
    setQuery('');
  };

  return (
    <div className="dashboard-card">
      <form onSubmit={handleSubmit}>
        <div className="search-input">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Show sales trend..."
          />
          <MagnifyingGlassIcon className="search-icon" />
        </div>
      </form>
    </div>
  );
};

export default QueryInput;