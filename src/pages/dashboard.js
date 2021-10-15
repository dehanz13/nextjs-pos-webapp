import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function DashboardPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>ERROR</div>;

  return user ? (
    <div>
      <h1>USER IS</h1>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <h1>NO USER</h1>
  );
}
