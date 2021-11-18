import React from 'react';

import styles from './styles.module.scss';

export function Input({ field, register }: any) {
  return (
    <>
      <label className={`m-bottom-2 ${styles.label}`} htmlFor={field.key}>
        {field.label}
      </label>
      <input
        className={`full-width m-bottom-1 ${styles.input} ${styles.borderRadius1}`}
        id={field.key}
        type={field.type}
        name={field.key}
        ref={register({ required: 'Field required' })}
      />
    </>
  );
}
