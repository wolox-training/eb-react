import React from 'react';

import styles from './styles.module.scss';

export function FieldError({ error }: any) {
  return <span className={styles.error}>{error?.message}</span>;
}
