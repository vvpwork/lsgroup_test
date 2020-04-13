import React, { useState } from 'react';
import T from 'prop-types';
import s from './style.module.scss';
import Button from '../Button';
import Input from '../Input';

const UserForm = ({ submit }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
  });
  const { email, password, name, surname } = state;

  const inputChange = ({ target }) => {
    setState(prevState => ({
      ...prevState,
      ...{ [target.name]: target.value },
    }));
  };
  const formSubmit = ev => {
    ev.preventDefault();
    submit(state);
  };

  return (
    <form className={s.form} onSubmit={formSubmit}>
      <h2 className={s.title}>Change your details</h2>
      <label htmlFor="" className={s.label}>
        <p className={s.text}>change Name</p>
        <Input
          type="text"
          name="name"
          value={name}
          required={true}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="" className={s.label}>
        <p className={s.text}>change Surname</p>
        <Input
          required={true}
          type="text"
          name="surname"
          value={surname}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="" className={s.label}>
        <p className={s.text}>change Email</p>
        <Input
          type="email"
          name="email"
          value={email}
          required={true}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="" className={s.label}>
        <p className={s.text}>change Password</p>
        <Input
          required={true}
          type="password"
          name="password"
          value={password}
          onChange={inputChange}
        />
      </label>
      <Button type="submit" theme="blue" value="change" />
    </form>
  );
};

UserForm.propTypes = {
  submit: T.func,
};

export default UserForm;
