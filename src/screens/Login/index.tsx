import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';

import { Input } from 'components/Input';
import { ErrorMessage } from 'components/ErrorMessage';
import { IField } from 'types/field.interface';
import { signIn } from 'services/UserService';
import { IUserLogin } from 'types/user.interface';
import logo from 'assets/logo-wolox.png';
import LocalStorageService from 'services/LocalStorageService';

import { FORM } from './constants';
import styles from './styles.module.scss';

export function Login() {
  const localStore = LocalStorageService;
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState<string[]>();

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {
    const values = { ...getValues() } as IUserLogin;

    if (isValid) {
      signIn(values)
        .then(({ errors: errorsData, ...res }) => {
          if (res.accessToken) {
            localStore.setValue('access-token', res.accessToken);
            localStore.setValue('uid', res.data.uid);
            localStore.setValue('client', res.client);
          }
          setErrorMessages(errorsData || []);
        })
        .then(() => {
          history.push('/home');
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
          Sign In
        </button>
        <NavLink to="/sign_up" className={`row middle center ${styles.button}`} type="button">
          Sign Up
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
