import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ErrorMessage } from 'components/ErrorMessage';
import logo from 'assets/logo-wolox.png';
import { Input } from 'components/Input';
import { IField } from 'types/field.interface';
import { signUp } from 'services/UserService';

import styles from './styles.module.scss';
import { FORM } from './constants';

export function SignUp() {
  const { i18n } = useTranslation();
  const [errorMessages, setErrorMessages] = useState<string[]>();

  const {
    getValues,
    register,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {
    const values = { ...getValues(), locale: i18n.language };

    if (isValid) {
      signUp(values).then(({ errors: errorsData, ...data }) => {
        // eslint-disable-next-line
        console.log(data);
        setErrorMessages(errorsData?.full_messages || []);
      });
    }
  };

  return (
    <div className={`column middle ${styles.container}`}>
      <img className={`m-bottom-4 ${styles.logo}`} src={logo} />
      <form>
        {FORM.map((field: IField) => (
          <div className="m-bottom-2" key={field.key}>
            <Input register={register} field={field} />
            {errors[field.key] && <ErrorMessage error={errors[field.key]} />}
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

      {!!errorMessages?.length && (
        <div className="m-top-2">
          {errorMessages.map(error => (
            <span className={`m-bottom-2 ${styles.errors}`} key={error}>
              - {error}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
