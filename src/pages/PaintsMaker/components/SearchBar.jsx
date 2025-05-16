import { useEffect, useRef, useState } from 'react';

function SearchBar({ onSearch, suggestions }) {
  const inputRef = useRef();
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue === '') {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = suggestions
      .filter(s =>
        s.toLowerCase().startsWith(inputValue.toLowerCase())
      )
      .slice(0, 10);

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setActiveIndex(-1);
  }, [inputValue, suggestions]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleClick = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex(prev => (prev + 1) % filteredSuggestions.length);
    } else if (e.key === 'ArrowUp') {
      setActiveIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0) {
        const selected = filteredSuggestions[activeIndex];
        handleClick(selected);
      }
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100); // Delay to allow click event
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
      <div className="autocomplete" style={{ width: '270px', position: 'relative' }}>
        <input
          className="search-input"
          type="search"
          ref={inputRef}
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          onFocus={() => inputValue && setShowSuggestions(true)}
          placeholder="search..."
          required
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="autocomplete-items">
            {filteredSuggestions.map((item, index) => (
              <div
                key={index}
                className={index === activeIndex ? 'autocomplete-active' : ''}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  backgroundColor: index === activeIndex ? '#e9e9e9' : '#fff'
                }}
                onMouseDown={() => handleClick(item)} // use onMouseDown to prevent blur before click
              >
                <strong>{item.substr(0, inputValue.length)}</strong>
                {item.substr(inputValue.length)}
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}

export default SearchBar;