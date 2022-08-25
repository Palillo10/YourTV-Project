import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleUserThunk } from '../store/user';

function User() {
  const { channelName } = useParams();
  const dispatch = useDispatch()
  const user = useSelector(state => state.users[channelName])
  useEffect(() => {
    dispatch(getSingleUserThunk(channelName))
  }, [channelName]);

  if (!user) {
    return null;
  }


  return (
    <ul>
      <li>
        <strong>Channel_name</strong> {user.channel_name}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <strong>Full Name</strong> {user.full_name}
      </li>
      <li>
        <div>

          <strong>Avatar</strong>
          <img src={user.avatar} alt='avatar' />
        </div>
      </li>
    </ul>
  );
}
export default User;
