import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file for styling

// ItemList component to display the list of items
const ItemList = ({ filter }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching a large list of items
    const fetchedItems = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
    setItems(fetchedItems);
  }, []);

  // Memoize filtered items to optimize performance
  const filteredItems = React.useMemo(
    () => items.filter(item => item.includes(filter)),
    [items, filter]
  );

  return (
    <ul className="item-list">
      {filteredItems.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [filter, setFilter] = useState('');

  // User Interaction: A user types in the input box to filter the list
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>React Fiber Example</h1>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Filter items"
        className="filter-input"
      />
      <ItemList filter={filter} />
    </div>
  );
};

export default App;
