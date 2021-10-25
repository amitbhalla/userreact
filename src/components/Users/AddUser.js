import React, { useState } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [eneteredUsername, setEneteredUsername] = useState('');
  const [eneteredAge, setEneteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      eneteredUsername.trim().length === 0 ||
      eneteredAge.trim().length === 0
    ) {
      return;
    }
    if (+eneteredAge < 1) {
      return;
    }
    props.onAddUser(eneteredUsername, eneteredAge);
    setEneteredUsername('');
    setEneteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEneteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEneteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangeHandler}
          value={eneteredUsername}
        />
        <label htmlFor="age">Age (number)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={eneteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
