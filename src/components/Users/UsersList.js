import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  const listUsers = props.users.map((user) => {
    return (
      <li key={user.name}>
        {user.name} ({user.age} years old)
      </li>
    );
  });

  return (
    <Card className={classes.users}>
      <ul>{listUsers}</ul>
    </Card>
  );
};

export default UsersList;
