import React from 'react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';

import { getBook } from 'services/BookService';

import styles from './styles.module.scss';

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading } = useQuery(['books', id], () => getBook(id));
  const history = useHistory();

  const goBack = () => history.goBack();

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div className="column start m-top-20">
      <button onClick={goBack} type="button" className={`m-left-3 ${styles.btnBack}`}>
        Back
      </button>
      <div className={`row ${styles.container}`}>
        <picture className={styles.image}>
          <img src={book?.imageUrl} alt="Cover book" />
        </picture>
        <div className={`m-left-5 ${styles.infoBook}`}>
          <div className={`${styles.titleContainer}`}>
            <span className={styles.title}>{book?.title} &nbsp; </span>
            <span className={styles.genre}>({book?.genre})</span>
          </div>
          <div className="row m-top-4">
            <span className={styles.label}>Author: &nbsp; </span>
            <span>{book?.author}</span>
          </div>
          <div className="row m-top-4">
            <span className={styles.label}>Editor: &nbsp; </span>
            <span>{book?.editor}</span>
          </div>
          <div className="row m-top-4">
            <span className={styles.label}>Year: &nbsp; </span>
            <span>{book?.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
