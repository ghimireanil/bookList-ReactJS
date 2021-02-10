import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = (props) => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>ANil REading List</h1>
      <p>Currently you have {books.length} to read ...</p>
    </div>
  );
};

export default Navbar;
