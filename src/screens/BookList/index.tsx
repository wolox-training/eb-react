import React from 'react';
import { useQuery } from 'react-query';

import { getBooks } from 'services/BookService';
import { IBookResponse } from 'types/book.interface';

import styles from './styles.module.scss';

function BookList() {
  const { data } = useQuery<IBookResponse>({ queryFn: getBooks });
  return (
    <div className={`m-top-20 m-bottom-10 ${styles.containerList}`}>
      {data?.page.map(book => (
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
