import React from 'react';

import { IField } from 'types/field.interface';

import styles from './styles.module.scss';

interface Props {
  field: IField;
  register: any;
}

export function Input({ field, register }: Props) {
  return (
    <div className="m-bottom-1">
      <label className={`m-bottom-1 ${styles.label}`} htmlFor={field.key}>
        {field.label}
      </label>
      <input
        role="input"
        aria-label={field.key}
        className={`full-width m-bottom-1 ${styles.input}`}
        id={field.key}
        type={field.type}
        name={field.key}
        ref={register({ required: 'Field required', pattern: field?.pattern || '' })}
      />
    </div>
  );
}
