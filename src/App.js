import React, { useState } from 'react';
import './App.css';

function App() {
  const [director, setDirector] = useState('');
  const [movie, setMovie] = useState('');
  const [directorList, setDirectorList] = useState([]);

  const handleAdd = () => {
    if (director && movie) {
      setDirectorList([...directorList, { director, movie }]);
      setDirector('');
      setMovie('');
    }
  };

  const handleRemove = (index) => {
    const updatedList = [...directorList];
    updatedList.splice(index, 1);
    setDirectorList(updatedList);
  };

  return (
    <div className="App">
      <div>
        <h1>Director and Movies</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Director Name"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          className='addtextfield'
        />
        <input
          type="text"
          placeholder="Movies Name"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          className='addtextfield'
        />
        <button onClick={handleAdd} className='addbtn'>
          Add
        </button>
      </div>
      {directorList.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Director Name"
            value={item.director}
            className='remtextfield'
            readOnly
          />
          <input
            type="text"
            placeholder="Movies Name"
            value={item.movie}
            readOnly
          />
          <button onClick={() => handleRemove(index)} className='rembtn'>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
