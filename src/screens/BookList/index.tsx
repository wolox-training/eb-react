import React from 'react';
import { useQuery } from 'react-query';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { getBooks } from 'services/BookService';
import { IBookResponse } from 'types/book.interface';

import styles from './styles.module.scss';

function BookList() {
  const { data } = useQuery<IBookResponse>('books', getBooks);
  const { path } = useRouteMatch();
  return (
    <div className={`m-top-20 m-bottom-10 ${styles.containerList}`}>
      {data &&
        data?.page.map(book => (
          <NavLink to={`${path}/${book.id}`} key={book.id} className={`column ${styles.itemBook}`}>
            <img src={book.imageUrl} className={styles.image} alt="Cover book" />
            <span className={`m-top-2 ${styles.title}`}>{book.title}</span>
            <span className="m-top-2">{book.author}</span>
          </NavLink>
        ))}
    </div>
  );
}

export default BookList;
