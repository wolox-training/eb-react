import React, { useEffect, useState } from 'react';

import { getBooks } from 'services/BookService';
import { IBook } from 'types/book.interface';

import styles from './styles.module.scss';

function BookList() {
  const [data, setData] = useState<IBook[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBooks();
      setData(books.page);
    };
    fetchBooks();
  }, []);

  return (
    <div className={`m-top-20 m-bottom-10 ${styles.containerList}`}>
      {data.map(book => (
        <div key={book.id} className={`column ${styles.itemBook}`}>
          <img src={book.imageUrl} className={styles.image} alt="Cover book" />
          <span className={`m-top-2 ${styles.title}`}>{book.title}</span>
          <span className="m-top-2">{book.author}</span>
        </div>
      ))}
    </div>
  );
}

export default BookList;
