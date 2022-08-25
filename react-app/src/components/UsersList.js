import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUsersThunk } from '../store/user';

function UsersList() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUsersThunk())
  }, []);

  const userComponents = Object.values(users).map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.channel_name}`}>{user.channel_name}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
