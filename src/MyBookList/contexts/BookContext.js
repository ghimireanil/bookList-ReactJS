import React, { createContext, useState, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
// import uuid from 'react-uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   { title: 'Munamadan', author: 'Devkota', id: 1 },
  //   { title: 'Jiban Kada ki phul', author: 'Parijat', id: 2 },
  // ]);
  // const addBooks = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };
  // const removeBooks = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
