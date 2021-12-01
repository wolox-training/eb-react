import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

import { ErrorMessage } from 'components/ErrorMessage';
import logo from 'assets/logo-wolox.png';
import { Input } from 'components/Input';
import { IField } from 'types/field.interface';
import { signUp } from 'services/UserService';

import styles from './styles.module.scss';
import { FORM } from './constants';

export function SignUp() {
  const { i18n } = useTranslation();
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState<string[]>();

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {
    const values = { ...getValues(), locale: i18n.language };

    if (isValid) {
      signUp(values).then(({ errors: errorsData }) => {
        // eslint-disable-next-line
        if(errorsData){
          setErrorMessages(errorsData?.full_messages || []);
        } else {
          history.push('/');
        }
      });
    }
  };

  return (
    <div className={`column middle ${styles.container}`}>
      <img className={`m-bottom-4 ${styles.logo}`} src={logo} />
      <form role="form" aria-invalid={isValid ? 'false' : 'true'} onSubmit={handleSubmit(onSubmit)}>
        {FORM.map((field: IField) => (
          <div className="m-bottom-2" key={field.key}>
            <Input register={register} field={field} />
            {errors[field.key] && <ErrorMessage error={errors[field.key]} />}
          </div>
        ))}
        <button
          role="button-submit"
          className={`m-bottom-6 ${styles.buttonPrimary} ${styles.topButton}`}
          type="submit"
        >
          Sign Up
        </button>
        <NavLink to="/" className={`row middle center ${styles.button}`} type="button">
          Sign In
        </NavLink>
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
