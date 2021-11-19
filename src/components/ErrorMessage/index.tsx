import React from 'react';
import { FieldError } from 'react-hook-form';

import styles from './styles.module.scss';

interface Props {
  error: FieldError;
}

export function ErrorMessage({ error }: Props) {
  return <span className={styles.error}>{error?.message}</span>;
}
