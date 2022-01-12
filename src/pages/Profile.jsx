import React from 'react';
import { withAuth } from '../components/AuthContext';

export const Profile = () => {
  return (
    <div>
      <h1>страница с профилем пользователя</h1>
    </div>
  );
};

export const ProfileWithAuth = withAuth(Profile);