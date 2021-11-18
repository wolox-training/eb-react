import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import logo from 'assets/logo-wolox.png';
import { Input } from 'components/Input';
import { FieldError } from 'components/FieldError';
import { IField } from 'types/field.interface';

import styles from './styles.module.scss';
import { FORM } from './constants';

export function SignUp() {
  const { i18n } = useTranslation();
  const {
    getValues,
    register,
    formState: { errors }
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {
    const values = { ...getValues(), locale: i18n.language };
    // eslint-disable-next-line
    console.log(values);
  };

  return (
    <div className={`column middle ${styles.container}`}>
      <img className={`m-bottom-4 ${styles.logo}`} src={logo} />
      <form>
        {FORM.map((field: IField) => (
          <div className="m-bottom-2" key={field.key}>
            <Input className="m-bottom-3" register={register} field={field} />
            {errors[field.key] && <FieldError error={errors[field.key]} />}
          </div>
        ))}
        <button
          className={`m-bottom-6 ${styles.buttonPrimary} ${styles.topButton}`}
          onClick={onSubmit}
          type="button"
        >
          Sign Up
        </button>
        <button className={styles.button} type="button">
          Sign In
        </button>
      </form>
    </div>
  );
}
