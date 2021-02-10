import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import Navbar from './Navbar';
import BookContextProvider from '../contexts/BookContext';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
